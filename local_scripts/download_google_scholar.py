"""
Author: Jared Moore
Date: March 2025

Reads Nick's google scholar page and downloads the files in a bibtex format
for this site.
"""

# Usage: python test.py > out.bib

import pybtex.database
from scholarly import scholarly

# For markdown formatting
output = "\n---\n---\n\n"

# Search for an author by name
search_query = scholarly.search_author("Nick Haber")
author = next(search_query)

# Fill in author details by fetching author data
author = scholarly.fill(author)

# Access the publications and export them to BibTeX format
for pub in author["publications"]:
    # If the publication entry is not detailed, fill it up
    if not pub.get("filled", False):
        pub = scholarly.fill(pub)

    # Use the full 'bib' info to construct and ensure the ID
    if "ENTRYTYPE" not in pub["bib"]:
        pub["bib"]["ENTRYTYPE"] = "article"

    if "ID" not in pub["bib"]:
        # Get first author's last name from the filled 'author' field
        author_str = pub["bib"].get("author", "unknown").lower()
        # Assume multiple authors are separated by " and ", take the first
        first_author = author_str.split(" and ")[0].strip()
        # Take the last token as the last name
        author_tokens = first_author.split()
        last_name = author_tokens[-1] if author_tokens else "unknown"

        # Get the first word of the title
        title_str = pub["bib"].get("title", "untitled").lower()
        title_tokens = title_str.split()
        first_word = title_tokens[0] if title_tokens else "untitled"

        # Get the publication year (after filling, this should now be present)
        year = pub["bib"].get("pub_year", "unknown")

        # Construct the ID: lastName_firstWord_year
        pub["bib"]["ID"] = f"{last_name}_{first_word}_{year}"

        if year == "unknown":
            print(f"No year in: {pub['bib']['ID']}")
    if "pub_url" in pub:
        pub["url"] = pub["pub_url"]
        if pub["url"].startswith("https://arxiv.org/abs/"):
            pub["pdf"] = pub["url"].replace("/abs/", "/pdf/")

    try:
        bibtex = scholarly.bibtex(pub)

        parsed_bibtex = pybtex.database.parse_string(bibtex, "bibtex")
        fields = list(parsed_bibtex.entries.values())[0].fields
        if "url" in pub:
            fields["url"] = pub["url"]
        if "pdf" in pub:
            fields["pdf"] = pub["pdf"]
        if "author_pub_id" in pub:
            fields["google_scholar_id"] = pub["author_pub_id"].split(":")[1]
        if "pub_year" in pub:
            fields["year"] = pub["pub_year"]
        fields["bibtex_show"] = "true"
        bibtex_str = parsed_bibtex.to_string("bibtex")
        bibtex_str = bibtex_str.encode("ascii", errors="ignore").decode("ascii")

        output += bibtex_str
        output += "\n"
    except KeyError:
        pass

output = output.replace("pub_year", "year").replace("\\", "")

with open("papers.bib", "w") as f:
    f.write(output)
