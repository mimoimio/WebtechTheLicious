

export const menuItems = [
    { image: "images/foods/kektornado.png", name: "Kek Tornado ", price: "RM18.00" },
    { image: "images/foods/creampuff.png", name: "Cream Puff", price: "RM8.00" },
    { image: "images/foods/burntcheesecake.jpg", name: "Burnt Cheesecake", price: "RM8.00" },
    { image: "images/foods/kekcoklatmoist.jpg", name: "Kek Coklat Moist", price: "RM18.00" },
    { image: "images/foods/pavlova.jpg", name: "Pavlova", price: "RM12.00" },
    { image: "images/foods/kektapakkuda.jpg", name: "Kek Tapak Kuda", price: "RM10.00" },
    { image: "images/foods/redvelvet.jpg", name: "Donut Red Velvet", price: "RM6.50" },
    { image: "images/foods/kekcheesebiscoff.jpg", name: "Kek Cheese Biscoff", price: "RM16.00" },
    { image: "images/foods/chocjar.jpg", name: "Chocojar", price: "RM15.00" },
    { image: "images/foods/browniescookies.jpg", name: "Brownies Cookies", price: "RM13.00" },
    { image: "images/foods/cookiesstick.jpg", name: "Cookies Stick", price: "RM23.00" },
    { image: "images/foods/chickenwrap.jpg", name: "Chicken Wrap", price: "RM7.50" },
    { image: "images/foods/jellyball.jpg", name: "Jelly Ball", price: "RM3.00" },
    { image: "images/foods/kuihsiput.jpg", name: "Kuih Siput", price: "RM12.00" },
    { image: "images/foods/kuihpopia.jpg", name: "Kuih Popia Simpul", price: "RM18.00" },
    { image: "images/foods/pavlovacup.jpg", name: "Pavlova Cup", price: "RM7.00" },
    { image: "images/foods/nasikenduriayam.jpg", name: "Nasi Kenduri Ayam dan Daging", price: "RM12.00" },
    { image: "images/foods/susulegend.jpg", name: "Air Susu Legend", price: "RM3.50" },
    { image: "images/foods/buko.jpg", name: "Buko", price: "RM15.00" },
    { image: "images/foods/airkelapa.jpg", name: "Air Kelapa", price: "RM3.00" },
    { image: "images/foods/tauhu.jpg", name: "Tauhu Bergedil", price: "RM8.00" },
    { image: "images/foods/chickensalad.jpg", name: "Chicken Salad", price: "RM8.50" },
    { image: "images/foods/ramenmeatball.jpg", name: "Ramen Meatball", price: "RM11.00" },
    { image: "images/foods/kerabumaggi.jpg", name: "Kerabu Maggi Seafood", price: "RM10.00" },
    { image: "images/foods/dimsum.jpg", name: "Dimsum", price: "RM8.00" },
    { image: "images/foods/ramenayam.jpg", name: "Ramen Ayam Cheese", price: "RM15.00" },
    { image: "images/foods/sushi.jpg", name: "Sushi Makimono", price: "RM10.00" },
    { image: "images/foods/sushiinari.jpg", name: "Sushi Inari", price: "RM10.00" },
    { image: "images/foods/miangdaging.jpg", name: "Miang Daging", price: "RM15.00" },
    { image: "images/foods/pocketdoraemon.jpg", name: "Pocket Doraemon", price: "RM5.50" },
    { image: "images/foods/vietnamroll.jpg", name: "Vietname Roll", price: "RM11.00" },
    
  ];

export function menuItemTemplate(item) {
   return `
            <img src="${item.image}" alt="${item.name}">

            <h3>${item.name}</h3>
                <p>_____________</P>
            <p>${item.price}</p>
                `
}

