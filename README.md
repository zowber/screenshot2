# Screenshot2

Basic script for capturing multiple full page screenshots at a given viewport width.

##Requirements

NodeJS.

##Set-up

npm i

##Usage

###List URLs you want to screenshot in screens.mjs...

export default
[
  {
    "name": "Screen 1",
    "url": "https://example.com/Screen-1/"
  },
  {
    "name": "Screen 2",
    "url": "https://example.com/Screen-2/"
  }
]

###Edit script to define viewport width...

Pass pixel width into the call to screenshot function. E.g., screenshot(1920) 

###Run script...

node screenshot2.mjs

Screenshots will be created, one by one, in the same directory as the script.