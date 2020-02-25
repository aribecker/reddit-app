# reddit-app
Sample React / Redux Reddit feed reader


## STEP 1: Prepare this plan. 

  - The plan took me 1hr
  - The total estimate for this plan is 10 hrs
  - According to this plan, in 6 hrs the app will be funcional
  - Investing 4 more hours I would include also animations and pagination

## STEP 2: DATA. Estimated 2 hrs

UPDATE: It took me 2:40 hrs, it's more than estimated due to some breaks I took and sme issues to make my sample project work

* Copy a sample starter project I have, that includes boiler plates and examples
* Api and redux for data loading
* Get the data from the service
  - Title
  - Author
  - Entry date (without format for now)
  - Url for the thumbnail
  - Url for the picture
  - Number of comments
* Render list with structured view components. No styling yet
  - Title (at its full length, so take this into account when sizing your cells)
  - Author
  - entry date, following a format like “x hours ago” 
  - A thumbnail for those who have a picture.
  - Number of comments
  - Unread status
  - Dismiss button without semantic
* Format "Ago"
* Rename and adapt the sample list of my starter project

## STEP 3: BEHAVIOUR. Estimated 2 hrs

* Responsive Left-right panel. Using a button to show the left panel. No swipe. No animations
* Dismiss post Redux
* Show post Redux
* Details panel without styling
* Dismiss all posts Redux

 Update:
 * Forgot to include Read status

## STEP 4: STYLING. Estimated 1 hr

* List styling
* Details panel styling
Update: I'll make just a basic styling here and leave the details for step 6

## STEP 5: PAGINATION. Estimated 2hrs

* Pagination support

## STEP 6: ANIMATIONS AND ERROR HANDLING. Estimated 2 hrs

Update: * Add detailed styling
* Swipe and animation for left-right panel
* Post dismiss animation
* Dismiss All animation
* Spinner
* Error message if the api fails

## OUT OF SCOPE

* Saving pictures in the picture gallery
  - It looks like an IOS feature for Iphone apps, not web

* App state-preservation/restoration
  - It looks like an IOS feature for Iphone apps, not web

