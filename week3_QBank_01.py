import requests
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20180327', headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

movies = soup.select('#old_content > table > tbody > tr')

for movie in movies:
    rank_tag = movie.select_one('td > img')['alt']
    title_tag = movie.select_one('td.title > div > a')
    point_tag = movie.select_one('td.point')

    if rank_tag is not None:
        if title_tag is not None:
            if point_tag is not None:
                print(rank_tag.text, title_tag.text, point_tag.text)