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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has an URL',() => {
            allFeeds.forEach((fd) =>{
                expect(fd.url).toBeDefined();
                expect(fd.url.length).not.toBe(0);
            });
        });


        /* TODO: Write a test that loops through each feed
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


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', ()=>{

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('is hidden by default', () => {
            expect($('body').attr('class')).toBe("menu-hidden");
        });


         /* TODO: Write a test that ensures the menu changes
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

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", () =>{
         /* TODO: Write a test that ensures when the loadFeed
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

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', () => {
        var loaded = [],
            index = 0,
            md = forge.md.md5;

        beforeEach((done) =>{
            loadFeed(index,()=>{
                done();
            });
        });

        afterEach( ()=>{
            index++;
        });

        it('Should load the feeds', (done) =>{
            loaded[index] = $('.feed').find('.entry h2');
            try{
                for(i=0;i<loaded[index].length;i++){
                    loaded[index][i] = loaded[index][i].innerText;
                }
            }catch(error){ console.log(error); throw error;}  
            console.log(index, loaded[index]);
            expect(loaded[index].length).not.toBe(0);
            done();
        });

        it('new Feed is loaded', (done) =>{ 
            loaded[index] = $('.feed').find('.entry h2'); 
            try{
                for(i=0;i<loaded[index].length;i++){
                    loaded[index][i] = loaded[index][i].innerText;
                }
            }catch(error){ console.log(error); throw error;}          
            
            console.log(index, loaded[index]);
            //expect(loaded[index].length).not.toBe(0);
            expect(JSON.stringify(loaded[index-1]) === JSON.stringify(loaded[index])).not.toBe(true);
            done();
        });

        it('new Feed is loaded', (done) =>{ 
            loaded[index] = $('.feed').find('.entry h2'); 
            try{
                for(i=0;i<loaded[index].length;i++){
                    loaded[index][i] = loaded[index][i].innerText;
                }
            }catch(error){ console.log(error); throw error;}          
            
            console.log(index, loaded[index]);
            //expect(loaded[index].length).not.toBe(0);
            expect(JSON.stringify(loaded[index-1]) === JSON.stringify(loaded[index])).not.toBe(true);
            done();
        });

        it('new Feed is loaded', (done) =>{ 
            loaded[index] = $('.feed').find('.entry h2'); 
            try{
                for(i=0;i<loaded[index].length;i++){
                    loaded[index][i] = loaded[index][i].innerText;
                }
            }catch(error){ console.log(error); throw error;}          
            
            console.log(index, loaded[index]);
            //expect(loaded[index].length).not.toBe(0);
            expect(JSON.stringify(loaded[index-1]) === JSON.stringify(loaded[index])).not.toBe(true);
            done();
        });

    });
}());
