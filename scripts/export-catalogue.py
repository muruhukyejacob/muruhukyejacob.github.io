"""Export src/data/publications.json to CSV, BibTeX and (optionally) Excel.

Usage:  python3 scripts/export-catalogue.py [--xlsx path/to/output.xlsx]
Writes public/data/publications.csv and public/data/publications.bib (served on the website).
"""
import csv, json, sys, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data = json.load(open(os.path.join(ROOT, 'src/data/publications.json'), encoding='utf-8'))
pubs = data['publications']
cats = data['categories']
out_dir = os.path.join(ROOT, 'public/data')
os.makedirs(out_dir, exist_ok=True)

FIELDS = ['id', 'category', 'category_name', 'type', 'status', 'title', 'authors', 'role', 'year', 'date', 'venue', 'publisher',
          'volume', 'issue', 'article_number', 'pages', 'doi', 'doi_url', 'official_url', 'pmid', 'pmcid', 'oa_url', 'license',
          'scholar_url', 'scholar_search_url', 'in_scholar', 'researchgate_url', 'in_researchgate', 'alt_versions', 'summary', 'topics', 'flags']

def row(p):
    r = {k: p.get(k, '') for k in FIELDS}
    r['category_name'] = cats[p['category']]
    r['authors'] = '; '.join(p['authors'])
    r['topics'] = '; '.join(p['topics'])
    r['flags'] = '; '.join(p['flags'])
    r['alt_versions'] = '; '.join(f"{v['label']} {v['url']}" for v in p['alt_versions'])
    return r

rows = [row(p) for p in sorted(pubs, key=lambda p: (p['category'], p['date']), reverse=False)]
public_fields = [f for f in FIELDS if f not in ('in_scholar', 'in_researchgate', 'flags', 'scholar_search_url')]
with open(os.path.join(out_dir, 'publications.csv'), 'w', newline='', encoding='utf-8-sig') as f:
    w = csv.DictWriter(f, fieldnames=public_fields, extrasaction='ignore')
    w.writeheader(); w.writerows(rows)

def bib(p):
    kind = {'A': 'article', 'B': 'article', 'C': 'techreport'}.get(p['category'], 'misc')
    esc = lambda s: re.sub(r'([&%$#_])', r'\\\1', s)
    f = {'title': '{' + esc(p['title']) + '}', 'author': ' and '.join(p['authors']), 'year': str(p['year'])}
    if kind == 'techreport':
        f['institution'] = p['publisher']; f['type'] = 'Working Paper'; f['number'] = p['article_number'].replace('Working Paper No. ', '')
    else:
        f['journal'] = p['venue']
        if p['volume']: f['volume'] = p['volume']
        if p['issue']: f['number'] = p['issue']
        if p['article_number']: f['pages'] = p['article_number']
    if p['doi']: f['doi'] = p['doi']
    f['url'] = p['doi_url'] or p['official_url']
    body = ',\n'.join(f'  {k} = {{{v}}}' if not v.startswith('{') else f'  {k} = {v}' for k, v in f.items())
    return f'@{kind}{{{p["id"]},\n{body}\n}}\n'

with open(os.path.join(out_dir, 'publications.bib'), 'w', encoding='utf-8') as f:
    f.write('\n'.join(bib(p) for p in pubs))

if '--xlsx' in sys.argv:
    from openpyxl import Workbook
    from openpyxl.styles import Font, PatternFill, Alignment
    from openpyxl.utils import get_column_letter
    path = sys.argv[sys.argv.index('--xlsx') + 1]
    wb = Workbook()
    ws = wb.active; ws.title = 'Publications'
    ws.append(FIELDS)
    for r in rows: ws.append([r[k] for k in FIELDS])
    head = Font(bold=True, color='FFFFFF'); fill = PatternFill('solid', fgColor='0E2A47')
    for c in ws[1]: c.font = head; c.fill = fill; c.alignment = Alignment(wrap_text=True, vertical='top')
    widths = {'title': 60, 'authors': 45, 'summary': 60, 'flags': 40, 'alt_versions': 40}
    for i, k in enumerate(FIELDS, 1):
        ws.column_dimensions[get_column_letter(i)].width = widths.get(k, 18)
    for row_ in ws.iter_rows(min_row=2):
        for c in row_: c.alignment = Alignment(wrap_text=True, vertical='top')
    ws.freeze_panes = 'G2'; ws.auto_filter.ref = ws.dimensions
    s = wb.create_sheet('Summary')
    s.append(['Category', 'Description', 'Count'])
    for code, name in cats.items():
        s.append([code, name, sum(1 for p in pubs if p['category'] == code)])
    s.append(['Total', 'Verified publications (preprint not counted separately)', len(pubs)])
    for c in s[1]: c.font = head; c.fill = fill
    s.column_dimensions['B'].width = 55
    o = wb.create_sheet('Preprints & under review')
    o.append(['Category', 'Title', 'Venue', 'Year/Status', 'DOI / note'])
    for pp in data['preprints']: o.append(['E', pp['title'], pp['venue'], pp['status'], pp['doi_url']])
    for u in data['under_review']: o.append(['E', u['title'], u['venue'], u['status'], u['note']])
    for c in o[1]: c.font = head; c.fill = fill
    o.column_dimensions['B'].width = 70; o.column_dimensions['E'].width = 50
    n = wb.create_sheet('Not mine on Scholar')
    n.append(['Title', 'Authors listed', 'Venue', 'Scholar entry'])
    for x in data['not_mine_on_scholar']: n.append([x['title'], x['authors'], x['venue'], x['scholar_url']])
    for c in n[1]: c.font = head; c.fill = fill
    n.column_dimensions['A'].width = 70; n.column_dimensions['B'].width = 50
    wb.save(path)
print(f'Exported {len(pubs)} publications')
