import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSecurity from "../assets/img/icon-security.png";

export default function Features() {
  return (
    <section className="flex flex-col items-center lg:flex-row lg:justify-center">
      <div className="text-center p-10">
        <img
          className="rounded-full p-4 border_green w-36 mx-auto"
          src={iconChat}
          alt="icon_chat"
        />
        <h3 className="font-bold text-xl mb-2">You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      <div className="text-center p-10">
        <img
          className="rounded-full p-4 border_green w-36 mx-auto"
          src={iconMoney}
          alt="icon_money"
        />
        <h3 className="font-bold text-xl mb-2">
          More savings means higher rates
        </h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      <div className="text-center p-10">
        <img
          className="rounded-full p-4 border_green w-36 mx-auto"
          src={iconSecurity}
          alt="icon_security"
        />
        <h3 className="font-bold text-xl mb-2">Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </div>
    </section>
  );
}
