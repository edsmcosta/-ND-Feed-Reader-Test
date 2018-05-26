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
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* it tests to make sure that the
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


        /* loops through each feed
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
         * hidden by default. 
         */

        it('is hidden by default', () => {
            expect($('body').attr('class')).toBe("menu-hidden");
        });


         /* ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
        it('has been clicked', () => {
            $('.menu-icon-link').click();
            expect($('body').attr('class')).toBe("");
            $('.menu-icon-link').click();
            expect($('body').attr('class')).toBe("menu-hidden"); 
        });

    });

    describe("Initial Entries", () =>{
         /*ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach((done) =>{
            loadFeed(0,()=>{
                done();
            });
        });
        it('Should load the initial feed: '+allFeeds[0].name, (done) =>{
            expect($('.feed').find('.entry h2').length).not.toBe(0);
            done();
        });

    });

  

        /* ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', () => {
        var loaded = [],
            index = 0,
            md = forge.md.md5;
        /* catch the feed options for each page we want, in this case we're goint to test each in allFeeds*/
        beforeEach((done) =>{
            loadFeed(index,()=>{
                done();
            });
        });
        /* After it spec, increase index of allFeeds */
        afterEach( ()=>{
            index++;
        });

        it('Should load the initial feed:'+allFeeds[0].name, (done) =>{
            loaded[index] = $('.feed').find('.entry h2');
            try{
                /* Get only the title, to have a precise comparation */
                for(i=0;i<loaded[index].length;i++){
                    loaded[index][i] = loaded[index][i].innerText;
                }
            }catch(error){ console.log(error); throw error;}  
            console.log(index, loaded[index]);
            expect(loaded[index].length).not.toBe(0);
            done();
        });

        it('new Feed is loaded:'+allFeeds[1].name, (done) =>{ 
            loaded[index] = $('.feed').find('.entry h2'); 
            try{
                for(i=0;i<loaded[index].length;i++){
                    loaded[index][i] = loaded[index][i].innerText;
                }
            }catch(error){ console.log(error); throw error;}          
            
            console.log(index, loaded[index]);
            expect(loaded[index].length).not.toBe(0);
            expect(JSON.stringify(loaded[index-1]) === JSON.stringify(loaded[index])).not.toBe(true);
            done();
        });

        it('new Feed is loaded:'+allFeeds[2].name, (done) =>{ 
            loaded[index] = $('.feed').find('.entry h2'); 
            try{
                for(i=0;i<loaded[index].length;i++){
                    loaded[index][i] = loaded[index][i].innerText;
                }
            }catch(error){ console.log(error); throw error;}          
            
            console.log(index, loaded[index]);
            expect(loaded[index].length).not.toBe(0);
            expect(JSON.stringify(loaded[index-1]) === JSON.stringify(loaded[index])).not.toBe(true);
            done();
        });

        it('new Feed is loaded:'+allFeeds[3].name, (done) =>{ 
            loaded[index] = $('.feed').find('.entry h2'); 
            try{
                for(i=0;i<loaded[index].length;i++){
                    loaded[index][i] = loaded[index][i].innerText;
                }
            }catch(error){ console.log(error); throw error;}          
            
            console.log(index, loaded[index]);
            expect(loaded[index].length).not.toBe(0);
            expect(JSON.stringify(loaded[index-1]) === JSON.stringify(loaded[index])).not.toBe(true);
            done();
        });

    });
}());
