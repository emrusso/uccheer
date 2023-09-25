# UC Cheer Webpage

## General
The site is written in AngularJS, HTML, and CSS. As of a small reworking in 2023, there is now a responsive mobile design rather than two distinct views for mobile and desktop.

### Design Credit
Feel free to make changes as needed but unless the website is significantly redesigned,
please maintain a visible credit to me (Emmi Russo) for original design with a
link to my personal portfolio (emmi.dev)

So, something like
`<a href="https://emmi.dev" target="_blank">
    Original design &copy; Emmi Russo, 2017
</a>`

## Updating the Roster
These instructions are written assuming a Unix-based system (Mac or Linux).
1. Create a Google Form with the following fields
   1. First Name
   2. Last Name
   3. Year
   4. Major
   5. Cheerocracy Position (not stunting position)
   6. Hometown
   7. High School
2. Send it out to your team, get your data
3. Clean up the data, the content that's in the Google Sheet created by the form is what's going to display on the website so make sure
    - ensure that the columns are in the order listed in Step 1
    - if someone doesn't hold a board position, put 'None' instead of leaving it blank.
    - proper, consistent capitalization
    - year follows the Fr, Sp, Jr, Sr convention typically used on athletic rosters
        - use Grad if someone is a graduate student
    - majors, high schools are fully spelled out (e.g., Biochem should be Biological Chemistry, HS should be High School)
    - roster pictures should be all from the same batch - having people submit their own gets really gross to handle and maintain quality
    - think about if you want double majors represented as 'Major 1, Major 2' or 'Major 1/Major 2', whether you want to abbreviate or spell it out
    - if someone hasn't declared a major put 'Undeclared'
4. File > Download > Tab Separated Values (.tsv)
5. Open the tsv file with a text editor and add an empty line to the bottom and save. This is important or else the script won't read in the last line of roster info - see more [here](https://stackoverflow.com/questions/12916352/shell-script-read-missing-last-line).
6. Move the download to this folder and rename the file to `roster.tsv`
7. Open the Terminal app and do `cd <path-to-cheerleading>` so if you put the cheerleading folder in your Downloads you would type `cd Downloads/cheerleading`. This is assuming your terminal settings are to open a new window on your home directory which is the default setting - if it's not, you're probably already comfortable enough with the command line to navigate from your default directory.
8. Type `chmod +x generate_roster.sh` - this makes the script you need to run have executable permissions.
9. Type `./generate_roster.sh`
10. Check that `roster.js` has been created and all the data is in there properly formatted and accurate (dangling commas in JavaScript are fine). If you look at the file with a text editor like VSCode the default syntax highlighting should show pretty obviously if anything went wrong.
11. All done! The website will read in the updated data from `roster.js` - nice work!

## AngularJS
This is running AngularJS 1 which is fairly old but updating to Angular 2 would require a significant reworking.
Angular 1 is in long-term support though so this should be set for a good bit. If you need a reference for
AngularJS, go to the docs for [AngularJS 1.x](https://angularjs.org/) NOT the new Angular (angular.io). W3Schools also has a
good overview.

## Performance
Whenever you add any new additions (including media) check out
Google's [pagespeed test](https://developers.google.com/speed/pagespeed/insights/?url=cheerleading.uchicago.edu&tab=desktop)
It will give you specific optimizations to make. The only concession I try to
make is the render-blocking CSS/Javascript because I prefer the look of the
gradual appearance of our logo.

The biggest performance issue is images. Try to strike a balance between compressing
JPGs and maintaining quality. Google has an excellent resource about this compressing
images [here](https://developers.google.com/speed/docs/insights/OptimizeImages).

I wrote a bash script to run and it will adjust all of the JPEGs in /Media
Run as `sh convert_media.sh`

## Traffic
You can see traffic [here](https://webtraffic.uchicago.edu/awstats/awstats.pl?config=cheerleading)

## Uploading to UChicago server
Follow the UC IT [instructions](https://uchicago.service-now.com/it?id=kb_article&kb=KB00015299) to upload with Cyberduck.
