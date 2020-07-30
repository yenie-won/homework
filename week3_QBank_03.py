import requests
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://sports.news.naver.com/kbaseball/record/index.nhn?category=kbo', headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

baseballs = soup.select('#regularTeamRecordList_table > tr')

for baseball in baseballs:
    rank_tag = baseball.select_one('th > strong')
    name_tag = baseball.select_one('td.tm > div > span')
    winning_rate_tag = baseball.select_one('td > strong')

    if rank_tag is not None:
        if name_tag is not None:
            if float(winning_rate_tag.text) >= 0.5:
                print(rank_tag.text, name_tag.text, winning_rate_tag.text)