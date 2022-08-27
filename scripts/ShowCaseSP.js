let array_obj=[
    {
        but:"Small Business",
        h2:"Start selling online, 100% free",
        p:"With Start Page, you can create a completely free microsite to start selling your products and services. Stay in touch with your customers by adding your WhatsApp or any other messaging platform.",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Small-business-1.png"
    },
    {
        but:"Coach",
        h2:"Build a coaching website you can’t stop showing off",
        p:"Create a beautiful page for your coaching business, Zero code or design skills required. All for free!",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Coach-1.png"
    },
    {
        but:"Music",
        h2:"Drive more fans to your music and live shows",
        p:"Create a beautiful page for your fans to buy your music, merch, and gig tickets. All for free!",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Music-1.png"
    },
    {
        but:"Photographer",
        h2:"Create a microsite that acts as your online photo gallery",
        p:"Showcase your photography, sell your prints, and make it easy for your audience to book photo shoots, all through your unique link in bio.",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Photographer-1.png"
    },
    {
        but:"Wedding",
        h2:"Create your free wedding website in minutes",
        p:"Give the special people in your life a beautiful online experience leading up to your special day. All for free!",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Wedding-1.png"
    },
    {
        but:"NFT",
        h2:"Stand out among the NFT crowd",
        p:"Create a beautiful page to delight your community, show off your NFT collection, and increase your NFT sales. All for free!",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/NFT-1.png"
    },
    {
        but:"Pet",
        h2:"Give your pet the internet-attention that they deserve",
        p:"You can use Start Page to share important details about your pet or really anything else that your furry, fuzzy, scaly, or hairy friend might want shared online as they either climb to internet-stardome or just make someone’s day a bit better purely by existing.",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Pet-1.png"
    },
    {
        but:"Links",
        h2:"A one link for all your links",
        p:"Easily drive more traffic from Instagram, TikTok, YouTube, or wherever else to your most valuable links and content. All for free!",
        button:"Create your Start Page for free",
        img:"https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/start-page/navigation/Links-1.png"
    }
    
];

let but = document.querySelectorAll("#str3>div>div>.butAll");
// console.log(but)

for(let i=0; i<but.length; i++)
{
    but[i].addEventListener("click", closeModal);
    console.log(but[i].innerText==array_obj[i].but)
}

function closeModal(event){
    // let se=event.target.attributes;
    // console.log("seeeee:",se)
   
   for(let i=0; i<array_obj.length; i++)
   {

    let e=event.target.innerText;
   but[i].style.borderBottom="2px solid white";
    if(e==array_obj[i].but)
    {
       
        console.log("Accepted");
        let v= document.getElementById("heading");
        // console.log(v)
        v.innerText =array_obj[i].h2;
        let b= document.getElementById("parag")
        b.innerText=array_obj[i].p;

        let img= document.getElementById("img");
        img.src=array_obj[i].img;

        but[i].style.borderBottom="2px solid blue";
        console.log(event)
    }
   }
  
}

