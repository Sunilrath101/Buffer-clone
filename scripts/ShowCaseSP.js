let array_obj=[
    {
        h2:"Start selling online, 100% free",
        p:"With Start Page, you can create a completely free microsite to start selling your products and services. Stay in touch with your customers by adding your WhatsApp or any other messaging platform.",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Small-business-1.png"
    },
    {
        h2:"Build a coaching website you can’t stop showing off",
        p:"Create a beautiful page for your coaching business, Zero code or design skills required. All for free!",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Coach-1.png"
    },
    {
        h2:"Drive more fans to your music and live shows",
        p:"Create a beautiful page for your fans to buy your music, merch, and gig tickets. All for free!",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Music-1.png"
    },
    {
        h2:"Create a microsite that acts as your online photo gallery",
        p:"Showcase your photography, sell your prints, and make it easy for your audience to book photo shoots, all through your unique link in bio.",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Photographer-1.png"
    },
    {
        h2:"Create your free wedding website in minutes",
        p:"Give the special people in your life a beautiful online experience leading up to your special day. All for free!",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Wedding-1.png"
    },
    {
        h2:"Stand out among the NFT crowd",
        p:"Create a beautiful page to delight your community, show off your NFT collection, and increase your NFT sales. All for free!",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/NFT-1.png"
    },
    {
        h2:"Give your pet the internet-attention that they deserve",
        p:"You can use Start Page to share important details about your pet or really anything else that your furry, fuzzy, scaly, or hairy friend might want shared online as they either climb to internet-stardome or just make someone’s day a bit better purely by existing.",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Pet-1.png"
    },
    {
        h2:"A one link for all your links",
        p:"Easily drive more traffic from Instagram, TikTok, YouTube, or wherever else to your most valuable links and content. All for free!",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Links-1.png"
    }
    
];

const boxes = document.querySelectorAll(".butall");

boxes.forEach( box =>{

    boxes.addEventListener("click", function handleClick(event){
     console.log("box clicked", event);
     box.setAttribute("style", "backgroundColor: salmon;")
    })

})

