

const callyApp = {};

const testimonials = [
{
        id: 1,
        note: "Cally is a fantastic photographer who not only captures her subjects beautifully but has the ability of capturing the emotive nuance of the moment. We’ve hired her many times for family photos, maternity, couples shots, she does it all and then some. She’s got a positivity and joy that is disarming and makes shooting with her comfortable and fun. We couldn’t recommend her enough!",
        writer: "Gabe Penner"
        },

{
            id: 2,
            note: "Quality & service with a smile! Cally is genuine, authentic and intentional right from the start. She helped us curate and organize a perfect adventure sesh that exceeded our expectations. My husband and I are very camera-shy and yet Cally captured the most stunning photos of us! We felt so comfortable the whole time. Plus, she's just the sweetest person you'll ever meet and has such a gift of loving people! Thank you Cally, we can't wait to have a future session with you when we visit BC again in the coming years.",
            writer: "Priscilla D"
        },

{
            id: 3,
            note: "We absolutely love the family photos Cally has captured for us during her monthly minis. Her photos are so beautiful and natural. She makes the process fun, handles the chaos of a family with ease, and is excellent providing directions during the shoot. She’s exceptionally warm, friendly, talented, professional, focused, and efficient. We definitely recommend her!",
            writer: "Mandy Adams"
        },

{
            id: 4,
            note: "My husband and I had a mini photoshoot done with Cally and our experience was amazing! She was great at directing us on what looked best and where to go to get lots of different looking pictures in the shorter amount of time we had. She is super personable and makes you feel comfortable right away. I would 100% recommend getting any style photoshoot done by Cally Petersen Photography.",
            writer: "Kaitlin H"
        },

{
            id: 5,
            note: "Cally is a beautiful hearted young woman, who takes heartwarming photographs that seem to freeze moments in time. She recently photographed our daughter's engagement photos! Amazing photographs that bring back the joy of the moments every time we look at them! I highly recommend Cally Petersen and her photography!",
            writer: "Kim J"
        },

{
            id: 6,
            note: "I was so honoured to have been photographed for a portrait session by Cally. It was a delight to dream up and work on this project with her. She approached it with such artistry and intentionality. Brilliant, patient, diligent, and soulful, Cally had the ability to help guide me in seeking to create unique and deeply meaningful imagery that reflects what I most hope is real in me, in my life, and in my story. She truly has a gift for slowing down time, capturing what can, in ways, feel fleeting in this life, and preserving the inspiration embedded in emotions. I would recommend her as a photographer without reservation.",
            writer: "Elizabeth C"
        },

{
            id: 7,
            note: "We booked with Cally for the first time in 2017 and continue to book in with her each year! Our first shoot with Cally was when our oldest daughter was only a month old - it is so special to see how Cally has captured our growing family over the years. Pictures with young children is not always easy.. but Cally is patient, understanding and captures the best candid shots! Cally has a calm and welcoming presence which is very helpful if you or your children are nervous. We highly recommend booking with Cally and we will always treasure the wonderful photos she takes of our family.",
            writer: "Alyssa B"
        },

        {
            id: 8,
            note: "We won a giveaway contest that Cally hosted. She generously took photos of our little family and treated us like dear friends. We were immediately at ease with her and the warmth and gentleness of her personality made it so fun and easy for us to be in front of the camera - not many people can do that! She though thoughtfully and creatively took our photos, making us feel so loved and truly valued -- not just random winners of a contest. She is very professional and responds timely to messages, giving updates for expectations and delivery so we're not left hanging and wondering. Her work showcases the intersection between her genuine personality and her natural creativity. The images we received captured the essence of our family and we couldn't be any happier with them! We recommend Cally to everyone, you will not be disappointed!",
            writer: "Hazelle S"
        },

        {
            id: 9,
            note: "Cally seriously went above and beyond for us! My husband and I were both nervous about getting our photos taken but Cally was so warm and friendly. She guided us so we knew what to do and made us feel comfortable. In the end we both had so much fun! We are so glad to have met Cally and are blown away with the quality of her work. We LOVE our photos! Thank you so much dearest Cally!",
            writer: "Alysha K"
        },

        {
            id: 10,
            note: "Cally has been photographing our family since 2018 and she is just the best! Getting photos done with small children can be challenging but Cally truly makes it easy. She captures those in between moments beautifully and honestly makes magic from every session. It’s very special to look back at the memories she has photographed for our family.",
            writer: "Stephanie F"
        },

        {
            id: 11,
            note: "Cally has been doing our family/maternity photos over the years. I love how she was able document these special moments for our family and she does it so beautifully. My kids are so comfortable around her as she’s patient and directive, but still letting the sessions flow. She is creative, talented and I can’t wait for more future sessions. So happy to have met this beautiful human.",
            writer: "Betania B"
        },

        {
            id: 12,
            note: "Cally was both highly professional and extremely personable. The shoot was a lot of fun, and I really appreciated the time and care that Cally took to make sure I felt comfortable and the photos captured the aesthetic I was looking for. The photos turned out beautifully. I am really grateful to have had the opportunity to work with Cally, and would recommend her to anyone who is looking for professional or personal photos!",
            writer: "Heather M"
        },

        {
            id: 13,
            note: "I would recommend Cally to my closest friends and family. She is super talented and has a great eye for photography. My husband was worried about getting family photos taken because sessions are usually long and they often look posed. But from the moment they met to the end of our session, he was sold. She beautifully captured the essence of who we are. Our photos turned out better than I could ever have imagined and we will for sure be using Cally again for all of our family photos.",
            writer: "Renée L"
        },

        {
            id: 14,
            note: "Cally is truly an amazing photographer and wonderful person! My maternity photos turned out even more breath taking that I could have ever imagined! Cally made me feel so comfortable the entire time and was great with guiding me through the whole session. I can't wait to get our family photos done by her in the next few years. From the bottom of my heart thank you for capturing pictures that I will truly cherish forever.",
            writer: "Jennifer B"
        },

        {
            id: 15,
            note: "Cally has an eye for beautiful photography and for capturing life's beautiful moments. We both share a passion for photography and I absolutely love her style, her photos tell a story and never fail to leave me a bit jealous of her skills! However, not only does she take stunning photos, she is also a true joy to work with and be around! I know I'll be getting her to take my pictures for years to come!",
            writer: "Olivia L"
        },

        {
            id: 16,
            note: "I had the privilege of getting some portrait photos taken by Cally. She has such a creative eye and is an all over fantastic photographer. I had never gotten these kinds of pictures taken before and was nervous about how to pose and what to do but Cally made me feel so comfortable and with her direction and encouragement, the photos turned out perfectly!",
            writer: "Shelby W"
        },

        {
            id: 17,
            note: "Cally has been such a pleasure to work with since we began messaging back and forth. My husband and I are both blown away by the pictures she captured (we didn’t know we could look so good!) Cally picked up on the aesthetic we liked and also kept in mind that I not only wanted a picture for our Christmas cards, but to display in our home and share on my blog. She’s very efficient with time and took a variety of really amazing shots! Thank you Cally XO!!",
            writer: "Hilary V"
        },

        {
            id: 18,
            note: "Cally was amazing with our family and we are so happy with all of our photos. She has a lovely personality and she is wonderful with children. Everyone felt comfortable right away. I find it challenging to get all of my four sons to look at the camera for a photo, but Cally was able to get wonderful photos of everyone, (individulally and as a group) very quickly and efficiently. Thank you Cally. We hope to see you again soon.",
            writer: "Elise M"
        },

        {
            id: 19,
            note: "Cally is magical. She has a great eye for detail and knows how to capture the essence of who you are. I am so happy that she took some shots for my blog - and am even more excited to share them with my audience! She knows how to make you feel beautiful - and look it too. I would definitely recommend her to anyone who is looking to get photographs done.",
            writer: "Jenn H"
        },

        {
            id: 20,
            note: "I am a mother of two little girls, and a step-mother/”bonus mom” to two middle aged boys. I love my family and have witnessed first hand how quickly children grow up. Because of this, I believe in the value of capturing family moments. Naturally then, we have had our photos done professionally many times over the course of the years. I first came across Cally’s work when I saw a mutual friend’s post of the photos she had taken with Cally shortly after getting married. Needless to say I was in awe of Cally’s work. I shortly after had the privilege of meeting Cally and thought she was equally as charming, charismatic, and talented as the photographs she creates. There is just something about her that makes you love her and immediately feel comfortable around her. I have since booked in 2 additional shoots and don’t plan to stop! She is a dream to work with and I could not recommend her more. Beyond 5 stars!",
            writer: "Melissa E"
        },

        {
            id: 21,
            note: "Cally was incredible to work with, made us all feel at ease , and she created a beautiful and memorable family moment out of our photos being taken. There were Many laughs and joyous moments captured, with the most stunning lighting, in a location that was so dreamy. Cally timed our photos to perfection, and right down to the minute, we caught the last glow of afternoon sunlight. Even our children were relaxed and enjoyed the experience so much. I will treasure these photos for ever. I am So grateful for this beautiful woman’s artistic eye and incredible work.",
            writer: "Heidi B"
        },

        {
            id: 22,
            note: "Cally is amazing! She was so great with our kids, gave awesome direction, and made us feel at ease in front of the camera. She also helped me deal with a major wardrobe malfunction like it was no big deal. She delivered our gallery so fast and really captured our family perfectly! I would highly recommend Cally for family portraits!",
            writer: "Vanessa E"
        },

        {
            id: 23,
            note: "Working with Cally was such a joy, her warmth and energy made it comfortable for us and our kids as well! The photos were incredible and the memories she captured are priceless! It was such a fun and amazing experience and we just loved her!",
            writer: "Eilesha R"
        },

        {
            id: 25,
            note: "A huge thank you to Cally for capturing these memories for us! Not once during this session did I feel shy, insecure, worried, or anything but excited and confident and I owe that to Cally’s professionalism & welcoming presence. Going through the photos with my husband had us smiling every swipe because they were ALL so beautiful! These photos were exactly the style and mood I had envisioned, and I had no doubts leading up to the shoot in regards to her capabilities. I truly appreciated how down to earth, welcoming, and reassuring she was the entire time. For this, I completely forgot about anything other then my baby and how good I felt celebrating my pregnancy that day with my man. From beginning to end it was the best case scenario, and I can’t wait until our next session!",
            writer: "Vanna A"
        },

        {
            id: 25,
            note: "We recently booked Cally for a maternity session. From the location to the suggested colours to wear, to even the time of day for the shoot all perfectly came together to make an unforgettable and fantastic photo shoot. Cally was delightful, fun and easy to work with and we love all the photos she gave us. We would highly encourage anyone to book with her if you want amazing photos to look back on.",
            writer: "Tanessa W"
        },

        {
            id: 26,
            note: "Working with Cally was one of the most pleasant and easiest experiences. Right away, she put us all at ease. Being 9 months pregnant and not feeling like myself, she was able to capture my family and I in such a beautiful way. Cally was able to capture lovely candid moments that show emotion, love, and family. I would recommend her to anyone looking for a talented family/maternity/lifestyle photographer. Thank you Cally for these lovely, timeless memories!",
            writer: "Sheelu I"
        }
];


// start: Mobile
callyApp.mobile = () => {
    console.log("lets get mobile");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navMenu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle('active')
        navMenu.classList.toggle('active')
    });

    document.querySelectorAll(".navLink").forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }))
}
// end: Mobile

// start: Testimonials

callyApp.addTestimonials = () => {
    const noteWrapper = document.querySelector('.noteWrapper');

    testimonials.forEach(res => {
        const noteContainer = document.createElement('div');
        noteContainer.classList.add('noteContent');
        noteContainer.classList.add('swiper-slide');
        noteWrapper.appendChild(noteContainer)
    
        noteContainer.innerHTML = `
        <p class="note">
        "${res.note}”
        </p>
    
        <p class="writter">
            -${res.writer}
        </p>
        `
    })


}


// end: Testimonials


// start: Loader
callyApp.loader = () => {
    console.log("Loading, Please Hold")
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        loader.classList.add('loaderFinish')
    })
}
// end: Loader


callyApp.init = () => {
    console.log("It's Alive");
    callyApp.loader();
    callyApp.mobile();
    callyApp.addTestimonials();
}

callyApp.init();