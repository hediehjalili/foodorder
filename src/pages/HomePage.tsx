import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "پیتزا پپرونی",
    description: "پیتزا با سس مخصوص",
    price: 250000,
    image: "/assets/pepperoni.jpg",
  },
  {
    id: 2,
    name: "پیتزا مارگاریتا",
    description: "پیتزا خوشمزه با سس مخصوص",
    price: 250000,
    image: "/assets/d9db947145fb931a2bd2b0dc46b59ac0.jpg",
  },
  {
    id: 3,
    name: "پیتزا سبزیجات",
    description: "پیتزا سبزیجات مناسب برای افراد وگن با سس مخصوص",
    price: 300000,
    image: "/assets/508ed9758b537e4b0cffcd4c2bf9e09c.jpg",
  },
  {
    id: 4,
    name: "پیتزا مخلوط",
    description: "پیتزا مخلوط آموریکایی با سس مخصوص",
    price: 350000,
    image: "/assets/14f1eecf2359a446da9d8fd0374877a1.jpg",
  },
  {
    id: 5,
    name: "پاستا آلفردو",
    description: "پاست با سس آلفردو",
    price: 300000,
    image: "/assets/c369edf4c726f6b792bbdb7d833edc32.jpg",
  },
  {
    id: 6,
    name: "اسپاگتی",
    description: "پاستا خوشمزه با سس مخصوص",
    price: 300000,
    image: "/assets/0cce0327c68c480fff9fd58c1b5b48ff.jpg",
  },
  {
    id: 7,
    name: "پاستا پستو",
    description: "پاستا با سس مخصوص",
    price: 250000,
    image: "/assets/9d7fc6ea2f1c7932e80c4f5273a19619.jpg",
  },
  {
    id: 8,
    name: "پاستا با گوشت",
    description: "پاستا به همراه گوشت و سس مخصوص",
    price: 350000,
    image: "/assets/4752eb54f6756f3243f876d097a4fb92.jpg",
  },
  {
    id: 9,
    name: "ساندویچ بیکن صبحانه",
    description: "بیکن با سس مخصوص",
    price: 250000,
    image: "/assets/9e00078d29c02713a5d1d0915a2f2fc6.jpg",
  },
  {
    id: 10,
    name: "ساندویچ تخم مرغ صبحانه",
    description: "ساندویچ سالم و خوشمزه با سس مخصوص",
    price: 150000,
    image: "/assets/12853586a23a61faa4acbdb1f30edfe0.jpg",
  },
  {
    id: 11,
    name: "ساندویچ رست بیف",
    description: "ساندویچ رست بیف با سس مخصوص",
    price: 250000,
    image: "/assets/e3775cc77c4c9e491f7836453488e9f5.jpg",
  },
  {
    id: 12,
    name: "کلاب مخصوص",
    description: "کلاب ژامبون با سس مخصوص",
    price: 250000,
    image: "/assets/e4fb0359368c435458f15b90d565e494.jpg",
  },
  {
    id: 13,
    name: "ساندویچ مرغ سوخاری",
    description: "ساندویچ با سس مخصوص",
    price: 250000,
    image: "/assets/2d74a6ef527abec1b87306e9fb5aefa7.jpg",
  },
  {
    id: 14,
    name: "مرغ سوخاری",
    description: "سه تیکه مرغ سوخاری با سس مخصوص",
    price: 350000,
    image: "/assets/85f2eb55d8e07d186cab2355c34447c6.jpg",
  },
  {
    id: 15,
    name: "فیش اند چیپس",
    description: "ماهی سوخاری به همراه سیب زمینی و سس سیر و قارچ",
    price: 380000,
    image: "/assets/3161e808b41a7d2b91335b449616c298.jpg",
  },
  {
    id: 16,
    name: "چیزبرگر",
    description: "همبرگر خوشمزه با سس مخصوص",
    price: 350000,
    image: "/assets/e1c27e44f1dbc1fd90df3f27b95bf988.jpg",
  },
  {
    id: 17,
    name: "قارچ سوخاری",
    description: "قارچ با سس مخصوص",
    price: 250000,
    image: "/assets/513f413f1aa8bfa306592f5446348207.jpg",
  },
  {
    id: 18,
    name: "سیب زمینی",
    description: "سیب زمینی خلالی با سس کچاپ",
    price: 200000,
    image: "/assets/57220047fc59da5722f2daf2bf683b67.jpg",
  },
  {
    id: 19,
    name: "سیب زمینی تنوری",
    description: "سیب زمینی خوشمزه با سس مخصوص",
    price: 250000,
    image: "/assets/c53a174e3fd82f5dc2283faa49042b9c.jpg",
  },
  {
    id: 20,
    name: "نودل",
    description: "نودل خوشمزه با سس مخصوص",
    price: 310000,
    image: "/assets/ecaff92e52892ae853347d24d88e733a.jpg",
  },
  {
    id: 21,
    name: "سالاد سزار",
    description: "سالاد خوشمزه با سس مخصوص",
    price: 300000,
    image: "/assets/ed8e27502fb001e746f94c8b8f0c6da8.jpg",
  },
  {
    id: 22,
    name: "سالاد یونانی",
    description: "سالاد خوشمزه با سس مخصوص",
    price: 250000,
    image: "/assets/92fbc497e189aced07708b989c9b8ce0.jpg",
  },
];

const HomePage = () => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState<Product[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });

  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart: Product[] = JSON.parse(savedCart);
      setCart(parsedCart);
      const totalPrice = parsedCart.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0
      );
      setTotal(totalPrice);
    }
  };

  const saveCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  useEffect(() => {
    saveCartToLocalStorage();
  }, [cart]);

  const handleAdd = (product: Product) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 0) + 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    setTotal((prevTotal) => prevTotal + product.price);
    toast.success("محصول به سبد خرید اضافه شد!");
  };

  const handleRemove = (product: Product) => {
    const updatedCart = cart
      .map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 0) - 1 }
          : item
      )
      .filter((item) => (item.quantity || 0) > 0);

    setCart(updatedCart);
    setTotal((prevTotal) => prevTotal - product.price);
    toast.error("محصول از سبد خرید حذف شد!");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, phone, address } = formData;

    if (!fullName || !phone || !address) {
      toast.error("لطفاً تمام فیلدها را پر کنید!");
      return false;
    }

    const nameRegex = /^[آ-یa-zA-Z\s]+$/;
    if (!nameRegex.test(fullName)) {
      toast.error("نام و نام خانوادگی باید فقط شامل حروف باشد!");
      return false;
    }

    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("شماره تلفن باید ۱۱ رقم باشد!");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    localStorage.setItem("order", JSON.stringify(formData));
    toast.success("سفارش شما ثبت شد. شماره سفارش شما نیم ساعت دیگر حاضر است!");
    setFormData({ fullName: "", phone: "", address: "" });
  };

  return (
    <div className="container mx-auto p-4 font-sans">
      <header className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white p-3 rounded">
        <div className="flex flex-row justify-between items-start">
          <h2 className="text-xl">بهترین غذا ها در سریع ترین زمان</h2>
          <div className="flex">
            <h1>فست فود آنلاین</h1>
            <img
              className="w-10 h-10"
              src="/assets/pizza_4058718.png"
              alt="logo"
            />
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => handleAdd(product)}
            onRemove={() => handleRemove(product)}
          />
        ))}
      </main>

      <footer className="bg-gray-800 text-white p-4 w-full flex flex-col text-center rounded">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded justify-center shadow-md text-black"
        >
          <div className="mb-4 text-black">
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="لطفا نام و نام خانوادگی خود را وارد نمایید"
              className="w-full p-2 border border-gray-300 text-right rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              شماره تلفن
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="لطفا شماره تلفن خود را وارد نمایید"
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-right rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              آدرس
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              placeholder="لطفا آدرس خود را وارد نمایید"
              onChange={handleInputChange}
              className="w-full p-2 border text-right border-gray-300 rounded"
            ></textarea>
          </div>
          <div className="bg-white p-4 rounded shadow-md text-right mb-4">
            <h2 className="text-lg font-bold mb-4">موارد سبد خرید:</h2>
            {cart.length > 0 ? (
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="mb-2 text-white-600">
                    <div className="bg-gradient-to-r from-gray-600 to-red-400 rounded-xl w-full p-4">
                      <div className="font-medium text-white">{item.name}</div>
                      <div className="text-white">{item.quantity} عدد</div>
                      <div className="text-black font-semibold">
                        {item.price.toLocaleString()} تومان
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">سبد خرید خالی است!</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          >
            ثبت سفارش
          </button>
          <p className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white p-2 m-2 font-sans font-semibold text-center rounded">
            جمع کل: {total.toLocaleString()} تومان
          </p>
        </form>

        <p>&copy; {new Date().getFullYear()} تمامی حقوق محفوظ است</p>
      </footer>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
