import ButtonTransaction from "./ButtonTransaction";

export default function BankChecking() {
  return (
    <div className="w-10/12 bg-white flex justify-between items-center p-6 border border-black my-3">
      <div>
        <h3>Argent Bank Checking (x8349)</h3>
        <p className="text-4xl font-bold">$2,082.79</p>
        <p>Available Balance</p>
      </div>
      <div>
        <ButtonTransaction />
      </div>
    </div>
  );
}
