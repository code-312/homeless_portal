from bs4 import BeautifulSoup
import requests

url = "http://www.chicagohealthatlas.org/place/uptown/resources#/?category=all"

r  = requests.get(url)

data = r.text

soup = BeautifulSoup(data, "html.parser")

for link in soup.find_all('a'):
    print(link.get('href'))
