import urllib.request
import re
import os

os.makedirs("public/assets/official", exist_ok=True)

with open("/tmp/countryroads_home.html", "r", encoding="utf-8", errors="ignore") as f:
    html = f.read()

# Collect all image URLs
matches = re.findall(r"(https?://www\.countryroads\.co\.in/[^\s\"\'\(\)<>]+?\.(?:jpe?g|png|gif|webp))", html, re.IGNORECASE)
matches += re.findall(r"(uploads/[^\s\"\'\(\)<>]+?\.(?:jpe?g|png|gif|webp))", html, re.IGNORECASE)
matches += re.findall(r"(assets/images/[^\s\"\'\(\)<>]+?\.(?:jpe?g|png|gif|webp))", html, re.IGNORECASE)

urls = set()
for m in matches:
    if not m.startswith("http"):
        m = "https://www.countryroads.co.in/home/" + m
    urls.add(m)

print(f"Total candidate image URLs found: {len(urls)}")

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://www.countryroads.co.in/home/"
}

downloaded = 0
for u in sorted(urls):
    filename = u.split("/")[-1]
    # Check if there is full-size version by stripping thumb/
    target_urls = []
    if "/thumb/" in u:
        target_urls.append(u.replace("/thumb/", "/"))
    target_urls.append(u)
    
    outpath = os.path.join("public/assets/official", filename)
    if os.path.exists(outpath) and os.path.getsize(outpath) > 1000:
        downloaded += 1
        continue

    success = False
    for target in target_urls:
        try:
            req = urllib.request.Request(target, headers=headers)
            with urllib.request.urlopen(req, timeout=12) as resp:
                data = resp.read()
                if len(data) > 1000:
                    with open(outpath, "wb") as out:
                        out.write(data)
                    downloaded += 1
                    success = True
                    break
        except Exception:
            continue
    if success:
        print(f"Downloaded: {filename} ({os.path.getsize(outpath)} bytes)")

print(f"Finished. Total downloaded: {downloaded}")
