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
            $('.menu-icon-link').click();
            expect($('body').attr('class')).not.toContain("menu-hidden");
            $('.menu-icon-link').click();
            expect($('body').attr('class')).toContain("menu-hidden"); 
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

        it('Should load the feeds', (done) =>{
            loaded = $('.feed').find('.entry h2');

            console.log( loaded);
            expect(loaded.length).not.toBe(0);
            done();
        });
    });


        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
    describe('New Feed Selection', () => {
        let loaded = [],
            index = 0,
            md = forge.md.md5;

        /* catch all the feed options*/
        beforeEach((done) =>{
            try{
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 40000;
             /* allFeeds.forEach((feed, index)=>{
                    loadFeed(index,()=>{
                        loaded[index] = $('.feed').find('.entry h2:lt(5)');
                        console.log(index, loaded[index]);
                        return (index === allFeeds.length ? done() : false);
                    });
                }); */
                loadFeed(index,()=>{
                    loaded[index] = $('.feed').find('.entry h2:lt(5)');
                    console.log(index, loaded[index]);
                    index++;
                    return loadFeed(index,()=>{
                        loaded[index] = $('.feed').find('.entry h2:lt(5)');
                        console.log(index, loaded[index]);
                        index++; 
                        return loadFeed(index,()=>{
                            loaded[index] = $('.feed').find('.entry h2:lt(5)');
                            console.log(index, loaded[index]);
                            index++;                            
                            return loadFeed(index,()=>{
                                loaded[index] = $('.feed').find('.entry h2:lt(5)');
                                console.log(index, loaded[index]);
                                index++; 
                                return done();
                            });
                        });
                    });
                }); 
            }catch(error){ 
                console.log('beforeEach:', error); throw error;
            } 
        });
        
        it('Should load the feeds on '+allFeeds.length, (done) =>
        {
            loaded.forEach((feed, idx) =>{
                try{
                    /* for(i=0;i<(feed.length);i++){
                       loaded[idx][i] = feed[i].innerText;
                    } */
                    
                    console.log(idx, loaded);
                    expect(JSON.stringify(loaded[idx--])).not.toBe(JSON.stringify(loaded[idx]));
                
                }catch(error){ 
                    console.log('Spec:',error); throw error;
                } 
            });          
        });
/* 
        it('new Feed is loaded on '+allFeeds[index] (done) =>{ 
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

        it('new Feed is loaded on '+allFeeds[index], (done) =>{ 
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

        it('new Feed is loaded on '+allFeeds[index], (done) =>{ 
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
        }); */

    });
}());
