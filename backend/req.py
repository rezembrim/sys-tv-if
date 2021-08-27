import requests
from lxml import html
from bs4 import BeautifulSoup

user = "12345678909"
pwd = "ifrn.2017"

url_login = ""
url_final = ""

def def listLinks():
    session_requests = requests.session()

    # Get login csrf token
    result = session_requests.get(url_login)
    tree = html.fromstring(result.text)
    print(tree)
    # authenticity_token = list(set(tree.xpath("//input[@name='csrfmiddlewaretoken']/@value")))[0]
    authenticity_token = list(set(tree.xpath("//input[@name='csrfmiddlewaretoken']/@value")))


    # Create payload
    payload = {
        "username": user,
        "password": pwd,
        # "csrfmiddlewaretoken": authenticity_token
    }

    # Perform login
    result = session_requests.post(LOGIN_URL, data = payload, headers = dict(referer = url_login))

    # Scrape url
    result = session_requests.get(URL, headers = dict(referer = url_final))
    content= result.content
    print(content)
    data = result.text()
    soup = BeautifulSoup(data)
    for link in soup.find_all('a'):
        print(link.get('href'))
        tree = html.fromstring(result.content)
        bucket_names = tree.xpath("//div[@class='repo-list--repo']/a/text()")
        print(bucket_names)


listLinks()
