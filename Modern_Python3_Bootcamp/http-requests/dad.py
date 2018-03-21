import requests
from random import choice

url = "https://icanhazdadjoke.com/search"
searchterm = input("What would you like to search for? ")

res = requests.get(url,
	headers={"Accept": "application/json"},
	params={"term": searchterm}
	)
data = res.json()
total_jokes = data["total_jokes"]
joke = choice(data["results"])["joke"]
print(joke)