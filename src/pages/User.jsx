import HeroConnected from "../components/HeroConnected";
import BankChecking from "../components/BankChecking";
import BankSaving from "../components/BankSaving";
import BankCard from "../components/BankCard";

export default function User() {
  return (
    <div className="bg-dark flex justify-center items-center flex-col h-[85vh]">
      <HeroConnected />
      <BankChecking />
      <BankSaving />
      <BankCard />
    </div>
  );
}
