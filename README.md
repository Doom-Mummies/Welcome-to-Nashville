# Welcome-to-Nashville
## What it does
---

The Welcome to Nashville app helps you build an itinerary for your day in Music City. 

```
                           ,~.
                        ,-'__ `-,
                       {,-'  `. }              ,')
                      ,( a )   `-.__         ,',')~,
                     <=.) (         `-.__,==' ' ' '}
                       (   )                      /
                        `-'\   ,                  )
                            |  \        `~.      /
                            \   `._        \    /
                             \     `._____,'   /
                              `-.            ,'
                                 `-.      ,-'
                                    `~~~~'
                                    //_||
                                 __//--'/`          
                               ,--'/`  '
                                  '
                    )                                        
                ( /(               )           (   (        
                )\())    )      ( /(   )   (   )\  )\   (   
                ((_)\  ( /(  (   )\()) /((  )\ ((_)((_) ))\  
                _((_) )(_)) )\ ((_)\ (_))\((_) _   _  /((_) 
                | \| |((_)_ ((_)| |(_)_)((_)(_)| | | |(_))   
                | .` |/ _` |(_-<| ' \ \ V / | || | | |/ -_)  
                |_|\_|\__,_|/__/|_||_| \_/  |_||_| |_|\___|  
```

### With this app you can:
- Search for restaurants by food type (ex: _chicken, donuts, whiskey_)
- Discover meetups based on topic (ex: _some text, some text, some text_)
- Check out upcoming concerts by genre (ex: _hip-hop, rock, bluegrass_)
- Find parks with certain features (ex: _hiking trails, skate park, playgrounds_)

## How to do it
---

### Download and start the app:
1. Click the <span style="color: white; background-color: green; border-radius: 3px; padding: 5px">Clone or download</span> button in the upper right
1. Copy the URL (or click the clipboard button)
1. Run `git clone URL` in your terminal, replacing URL with the copied url
1. `cd` into the new directory `Welcome-to-Nashville`
1. `cd` into to `src/`
1. Start `http-server -p 8080` (Download [http-server](https://github.com/http-party/http-server#readme) if not installed)
1. Open `http://127.0.0.1:8080/` in your browser

### Set up API keys
You'll need to use the following API keys to grab the information. Add these in myApiKey.js:

| Component | Variable Name | API |
| ---: | :---: | --- |
| parks | N/A | [Nashville Metro Gov API](https://dev.socrata.com/foundry/data.nashville.gov/xbru-cfzi) |
| restaurants | zomatoApiKey | [Zomato API](https://developers.zomato.com/api) |
| meetups | N/A | [Eventbrite API](https://www.eventbrite.com/developer/v3/) |
| concerts | concertsTicketMasterKey | [Ticketmaster API](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/) |


### Use the app
Search for food, meetups, concerts, or parks, then click Save to build an itinerary for your visit. Wow!


---
Brought to you by _Michelle Johnson_ **|** _Lauren Riddle_ **|** _Ryan Cunningham_ **|** _Kenneth Boyd_