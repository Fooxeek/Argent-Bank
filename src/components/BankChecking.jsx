import ButtonTransaction from "./ButtonTransaction";

export default function BankChecking() {
  return (
    <div className="w-10/12 bg-white flex flex-col sm:flex-row justify-between items-center sm:p-6 p-1 border border-black sm:my-3 my-2">
      <div className="text-center sm:text-left">
        <h3>Argent Bank Checking (x8349)</h3>
        <p className="sm:text-4xl text-2xl font-bold">$2,082.79</p>
        <p>Available Balance</p>
      </div>
      <div className="mt-4 sm:mt-0 sm:text-right">
        <ButtonTransaction />
      </div>
    </div>
  );
}
