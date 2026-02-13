import { Link } from "react-router-dom";

export default function Header() {
  const Categories = [
    {
      name: "کافه",
      img: "اسپرسوبار.webp",
      url: "Cofe",
      description:
        "طراحی و پیاده‌سازی منوی دیجیتال با قابلیت دسته‌بندی محصولات (نوشیدنی‌های گرم، سرد، دسر) و نمایش تصاویر با کیفیت",
    },
    {
      name: "رستوران",
      img: "استیک.webp",
      url: "Restaurant",
      description:
        "طراحی سایت ریسپانسیو با منوی غذای قابل بروزرسانی از طریق پنل مدیریت. منو شامل بخش‌های پیش‌غذا، اصلی، دسر و نوشیدنی با امکان فیلتر بر اساس رژیم غذایی",
    },
    {
      name: "فست فودی",
      img: "برگر.webp",
      url: "FastFood",
      description:
        "طراحی سایت ریسپانسیو با منوی غذای قابل بروزرسانی از طریق پنل مدیریت. منو شامل بخش‌های پیش‌غذا، اصلی، دسر و نوشیدنی با امکان فیلتر بر اساس رژیم غذایی",
    },
  ];
  return (
    <div className="Header">
      <div className="Categories">
        {Categories.map((item, i) => {
          return (
            <Link to={item.url}>
              <div className="boxCategories">
                <img src={item.img} />
                <div>
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
