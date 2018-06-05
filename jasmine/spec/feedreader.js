/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /*  This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tmake sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        

        /* loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has an URL',() => {
            allFeeds.forEach((fd) =>{
                expect(fd.url).toBeDefined();
                expect(fd.url.length).not.toBe(0);
            });
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('has a name', () => {
            allFeeds.forEach((fd) =>{
                expect(fd.name).toBeDefined();
                expect(fd.name.length).not.toBe(0);
            });
        });
    });


    describe('The menu', ()=>{

        /* ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('is hidden by default', () => {
            expect($('body').attr('class')).toContain("menu-hidden");
        });


         /* ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
        it('has been clicked', () => {
            if($('body').hasClass("menu-hidden")){
                $('.menu-icon-link').click();
                expect($('body').attr('class')).not.toContain("menu-hidden");
                $('.menu-icon-link').click();

            }
            if(!$('body').hasClass("menu-hidden")){
                $('.menu-icon-link').click();
                expect($('body').attr('class')).toContain("menu-hidden");   
            }
        });

    });

    describe("Initial Entries", () =>{
        let loaded = [];
         /* ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach((done) =>{
            loadFeed(0,()=>{
                done();
            });
        });

        it('Should load the feeds', () =>{
            loaded = $('.feed .entry');

            console.log( loaded);
            expect(loaded.length).not.toBe(0);
        });
    });


        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
    describe('New Feed Selection', () => {
        let loaded = [],
            primeiro,
            segundo,
            index = 0,
            md = forge.md.md5;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

        /* catch the feed options*/
        beforeEach((done) =>{
            try{
               loadFeed(index,()=>{
                    loaded[index] = $('.feed .entry').html();
                    console.log(index, loaded[index]);
                    index++;
                    return loadFeed(index,()=>{
                        loaded[index]  = $('.feed .entry').html();
                        console.log(index, loaded[index]);
                        index++; 
                        return done();
                    });
                });                  
            }catch(error){ 
                console.log('beforeEach:', error); throw error;
            } 
        });
        
        it('Should load the feeds on 2', () =>
        {
            /* start the comparations */
            expect(loaded[0]).not.toBe(loaded[1]);   
        });

    });
}());
