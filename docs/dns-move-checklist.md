# thrifti.app DNS move to Cloudflare: checklist

Goal: add credit.thrifti.app for the credit site without breaking the grocery app or email.
Recorded 2026-11-08 from public DNS. Registrar: Squarespace. Current DNS host: Google Cloud DNS.
DNSSEC: no DS record at the registrar, so nothing to switch off before the move.

## Records that must exist in Cloudflare before changing nameservers

| Type | Name | Value | Priority | Proxy |
| --- | --- | --- | --- | --- |
| A | thrifti.app (@) | 216.198.79.1 | | DNS only (grey) - grocery app on Vercel |
| CNAME | www | 79e79709cbb040e5.vercel-dns-017.com | | DNS only (grey) - grocery app on Vercel |
| MX | thrifti.app (@) | mx.zoho.eu | 10 | n/a |
| MX | thrifti.app (@) | mx2.zoho.eu | 20 | n/a |
| MX | thrifti.app (@) | mx3.zoho.eu | 50 | n/a |
| TXT | thrifti.app (@) | v=spf1 include:zohomail.eu ~all | | n/a |
| TXT | thrifti.app (@) | google-site-verification=2G0SiKmGEtUYAcVNvx-ZvgTox1JfgIPxmxUKuoFkMdM | | n/a |
| TXT | zoho._domainkey | v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHaMH+1uQo3ykrbS3zSl7JD8z+o5IeuIdG67tSCGiw2ll3xCp5EKzIhngWn4cRL8eIZXQUiOSzJ6j/vhOWc+Bfv7oG4R/NFSpHXfuJPZdnRlKDEk+rgLOimD9reZp8zkrdFmrslJApNNHTbTqfFjGf3I+/UqdKXNvAgDaS27nlRwIDAQAB | | n/a |
| CNAME | _domainconnect | _domainconnect.domains.squarespace.com | | DNS only (grey) |

Vercel records must stay DNS only. Proxying them through Cloudflare can break the grocery app's certificate.
No DMARC record exists today. Optional later: TXT _dmarc "v=DMARC1; p=none; rua=mailto:contact@thrifti.app".

## Steps
1. AD: Cloudflare dashboard, Add a domain, thrifti.app, Free plan, import existing records.
2. Claude: compare Cloudflare's imported list with the table above.
3. AD: Squarespace Domains, thrifti.app, DNS, Domain nameservers, use custom nameservers, enter the two Cloudflare nameservers.
4. Wait until Cloudflare says the domain is Active.
5. Claude: add credit.thrifti.app as a custom domain of the thrifti-credit Worker, then test the credit site, the grocery app and email.
