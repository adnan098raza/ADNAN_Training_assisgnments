#weather app
import requests
# Enter your API key here
api_key = "4f8e795dcd6dbf7b9f5276bff095ffc1"

# Base URL for OpenWeatherMap API
base_url = "http://api.openweathermap.org/data/2.5/weather?"

# Enter the city name
city_name = input("Enter city name: ")

# Complete URL with API key and city name
complete_url = base_url + "appid=" + api_key + "&q=" + city_name

# Send request to OpenWeatherMap API
response = requests.get(complete_url)

# Convert response to JSON format
data = response.json()

# Extract relevant data from JSON object
if data["cod"] != "404":
    weather = data["weather"][0]["description"]
    temperature = data["main"]["temp"] - 273.15
    humidity = data["main"]["humidity"]
    wind_speed = data["wind"]["speed"]
    
    # Print weather information
    print("Weather: ", weather)
    print("Temperature: {:.2f} °C".format(temperature))
    print("Humidity: ", humidity, "%")
    print("Wind Speed: ", wind_speed, "km/h")
else:
    # Print error message if city not found
    print("City not found")
