# web_thdl
- backend: pip install -r requirement.txt
- frontend: npm install
- FINAL = true. WEBSITE no longer maintain
---------------------------------------------------
##Website tích hợp dữ liệu các sản phẩm của apple (điện thoại, máy tính bảng, macbook, đồng hồ) từ nhiều nguồn (22 nguồn) với tổng cộng 5000 bản ghi thuộc về khoảng 600 sản phẩm.
#Phương pháp:
- Crawl dữ liệu: Scrapy
- Pre processing: a lot of adjustments
- Schema mapping: Pre built schema, string-schema mapping using levenshtein ratio.
- Data matching using pyentity matching
- Search using elastic search
- web: FE reactjs, BE fast api - python
