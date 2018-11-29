from requests import get
from requests.exceptions import RequestException
from contextlib import closing
from bs4 import BeautifulSoup
import pandas as pd
# Load Movies Metadata


def simple_get(url):
    """
    Attempts to get the content at `url` by making an HTTP GET request.
    If the content-type of response is some kind of HTML/XML, return the
    text content, otherwise return None.
    """
    try:
        with closing(get(url, stream=True)) as resp:
            if is_good_response(resp):
                return resp.content
            else:
                return "None"

    except RequestException as e:
        log_error('Error during requests to {0} : {1}'.format(url, str(e)))
        return "None"


def is_good_response(resp):
    """
    Returns True if the response seems to be HTML, False otherwise.
    """
    content_type = resp.headers['Content-Type'].lower()
    return (resp.status_code == 200 
            and content_type is not None 
            and content_type.find('html') > -1)


def log_error(e):
    """
    It is always a good idea to log errors. 
    This function just prints them, but you can
    make it do anything.
    """
    print(e)

metadata = pd.read_csv('new.csv', low_memory=False)
a= metadata['charity_url']
for i in a:
    
    raw_html = simple_get(i)
    html = BeautifulSoup(raw_html, 'html.parser')
#print(html)
    if html==None:
        name_box2=None
    else:
        name_box = html.find('div', attrs={'class': 'accordion-item-bd'})
        if name_box==None:
            name_box2=None
        else:
            name_box2 = name_box.find('p')
    if name_box2==None:
        name="noneeeeeeeeee"
    else:
        name = name_box2.text.strip()
    print(name)
