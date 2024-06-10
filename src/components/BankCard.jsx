import ButtonTransaction from "./ButtonTransaction";

export default function BankCard() {
  return (
    <div className="w-10/12 bg-white flex justify-between items-center p-6 border border-black my-3">
      <div>
        <h3>Argent Bank Credit Card (x8349)</h3>
        <p className="text-4xl font-bold">$184.30</p>
        <p>Current Balance</p>
      </div>
      <div>
        <ButtonTransaction />
      </div>
    </div>
  );
}
