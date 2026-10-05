export const brand = {
  "slug": "crustlane-pizza",
  "name": "Crustlane",
  "tagline": "Fire-kissed pies, built your way",
  "niche": "pizza",
  "description": "Premium Neapolitan-style pizza delivery with full customization.",
  "fonts": {
    "display": "Bebas Neue",
    "body": "Archivo",
    "google": "Bebas+Neue&family=Archivo:wght@400;500;600;700;800;900"
  },
  "colors": {
    "bg": "#ff2e63",
    "surface": "#fff5e6",
    "text": "#111111",
    "muted": "#3d3d3d",
    "brand": "#ff9f1c",
    "accent": "#2ec4b6",
    "success": "#2d6a4f",
    "danger": "#d00000"
  },
  "radius": "0px",
  "layout": "ember",
  "video": "https://videos.pexels.com/video-files/4259419/4259419-sd_640_360_25fps.mp4",
  "poster": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&q=80",
  "offer": {
    "code": "FIRE20",
    "label": "20% off your first pie",
    "detail": "Use FIRE20 · ends Sunday"
  },
  "aiName": "CrustBot",
  "aiHints": [
    {
      "q": "How do I customize a pizza?",
      "a": "Open any pie → pick size (10/12/14/16), crust, sauce, cheese blend, then stack toppings. Half-and-half is under Split."
    },
    {
      "q": "What's the hottest deal?",
      "a": "FIRE20 takes 20% off your first order. Weeknight Duo is 2 mediums + garlic knots for $28."
    },
    {
      "q": "Delivery time?",
      "a": "Typical ETA is 28–40 minutes. Enter your ZIP on checkout for a live estimate."
    },
    {
      "q": "Spice levels?",
      "a": "Each pie shows a chili meter from 0–5. Diavola sits at 4; you can add Calabrian oil for +1."
    },
    {
      "q": "Allergens?",
      "a": "PDPs list gluten, dairy, and nut flags. Gluten-free crust is available on 12\" pies."
    }
  ],
  "nav": [
    "Menu",
    "Build",
    "Deals",
    "Reviews"
  ],
  "features": [
    "builder",
    "halfHalf",
    "nutrition",
    "deliveryEta",
    "loyalty"
  ],
  "products": [
    {
      "id": "margherita",
      "name": "San Marzano Margherita",
      "price": 16,
      "cat": "Classics",
      "rating": 4.9,
      "reviews": 214,
      "spice": 0,
      "img": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&q=80",
      "blurb": "Tomato, fior di latte, basil, EVOO.",
      "tags": [
        "vegetarian"
      ],
      "calories": 720
    },
    {
      "id": "diavola",
      "name": "Calabrian Diavola",
      "price": 19,
      "cat": "Spicy",
      "rating": 4.8,
      "reviews": 168,
      "spice": 4,
      "img": "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=900&q=80",
      "blurb": "Spicy salami, chili honey, smoked mozzarella.",
      "tags": [
        "spicy"
      ],
      "calories": 860
    },
    {
      "id": "truffle",
      "name": "Forest Truffle",
      "price": 24,
      "cat": "Signature",
      "rating": 4.9,
      "reviews": 97,
      "spice": 0,
      "img": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80",
      "blurb": "Mushroom medley, truffle cream, thyme.",
      "tags": [
        "vegetarian"
      ],
      "calories": 790
    },
    {
      "id": "pepperoni",
      "name": "Cup & Char Pepperoni",
      "price": 18,
      "cat": "Classics",
      "rating": 4.7,
      "reviews": 302,
      "spice": 2,
      "img": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=900&q=80",
      "blurb": "Crispy cups, hot honey drizzle optional.",
      "tags": [],
      "calories": 840
    },
    {
      "id": "bianca",
      "name": "Roasted Garlic Bianca",
      "price": 17,
      "cat": "White",
      "rating": 4.6,
      "reviews": 88,
      "spice": 0,
      "img": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=900&q=80",
      "blurb": "No tomato — ricotta, garlic confit, lemon zest.",
      "tags": [
        "vegetarian"
      ],
      "calories": 760
    },
    {
      "id": "bbq",
      "name": "Smoked BBQ Chicken",
      "price": 20,
      "cat": "Signature",
      "rating": 4.7,
      "reviews": 141,
      "spice": 1,
      "img": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=900&q=80",
      "blurb": "Chipotle BBQ, red onion, cilantro.",
      "tags": [],
      "calories": 880
    },
    {
      "id": "veggie",
      "name": "Market Garden",
      "price": 18,
      "cat": "Classics",
      "rating": 4.5,
      "reviews": 76,
      "spice": 0,
      "img": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=900&q=80",
      "blurb": "Zucchini, peppers, olives, pesto swirl.",
      "tags": [
        "vegetarian",
        "vegan-option"
      ],
      "calories": 690
    },
    {
      "id": "prosciutto",
      "name": "Prosciutto & Fig",
      "price": 23,
      "cat": "Signature",
      "rating": 4.9,
      "reviews": 112,
      "spice": 0,
      "img": "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=900&q=80",
      "blurb": "Fig jam, arugula, aged balsamic.",
      "tags": [],
      "calories": 810
    }
  ],
  "variants": {
    "sizes": [
      {
        "id": "10",
        "label": "10\" Personal",
        "delta": 0
      },
      {
        "id": "12",
        "label": "12\" Classic",
        "delta": 3
      },
      {
        "id": "14",
        "label": "14\" Share",
        "delta": 6
      },
      {
        "id": "16",
        "label": "16\" Party",
        "delta": 10
      }
    ],
    "crusts": [
      "Hand-tossed",
      "Thin & crisp",
      "Sourdough",
      "Gluten-free (12\")",
      "Stuffed edge"
    ],
    "cheeses": [
      "Fior di latte",
      "Low-moisture mozzarella",
      "Smoked mozzarella",
      "Vegan cashew",
      "Four-cheese blend"
    ],
    "sauces": [
      "San Marzano",
      "Spicy arrabbiata",
      "White cream",
      "Pesto",
      "BBQ"
    ],
    "toppings": [
      {
        "id": "pep",
        "name": "Cup pepperoni",
        "price": 2.5
      },
      {
        "id": "mush",
        "name": "Roasted mushrooms",
        "price": 2
      },
      {
        "id": "basil",
        "name": "Fresh basil",
        "price": 1
      },
      {
        "id": "jal",
        "name": "Pickled jalapeño",
        "price": 1.5
      },
      {
        "id": "honey",
        "name": "Hot honey",
        "price": 1.5
      },
      {
        "id": "olive",
        "name": "Castelvetrano olives",
        "price": 2
      },
      {
        "id": "onion",
        "name": "Red onion",
        "price": 1
      },
      {
        "id": "sausage",
        "name": "Fennel sausage",
        "price": 3
      },
      {
        "id": "ricotta",
        "name": "Dollops of ricotta",
        "price": 2.5
      },
      {
        "id": "truffle",
        "name": "Truffle oil finish",
        "price": 3.5
      }
    ]
  },
  "reviews": [
    {
      "name": "Maya R.",
      "stars": 5,
      "text": "Half pepperoni / half truffle was perfect. CrustBot helped me nail the spice level."
    },
    {
      "name": "Jordan K.",
      "stars": 5,
      "text": "Arrived in 32 minutes still blistered. FIRE20 made it a steal."
    },
    {
      "name": "Priya S.",
      "stars": 4,
      "text": "Gluten-free crust actually tastes like pizza. Nutrition panel is a nice touch."
    },
    {
      "name": "Leo M.",
      "stars": 5,
      "text": "Diavola with Calabrian oil — dangerous in the best way."
    }
  ],
  "stats": [
    {
      "label": "Pies tonight",
      "value": 184
    },
    {
      "label": "Avg delivery",
      "value": "34m"
    },
    {
      "label": "Loyalty members",
      "value": "12k+"
    }
  ],
  "styleMarker": "max-hero",
  "styleLabel": "Maximalism — bold food photography, loud type, stacked offers"
};
export const products = brand.products;
export function getProduct(id){return products.find(p=>p.id===id)}
export const STORAGE_KEY='sai-cart-crustlane-pizza';
export const WISH_KEY='sai-wish-crustlane-pizza';
