import ButtonTransaction from "./ButtonTransaction";

export default function BankSaving() {
  return (
    <div className="w-10/12 bg-white flex justify-between items-center p-6 border border-black my-3">
      <div>
        <h3>Argent Bank Savings (x6712)</h3>
        <p className="text-4xl font-bold">$10,928.42</p>
        <p>Available Balance</p>
      </div>
      <div>
        <ButtonTransaction />
      </div>
    </div>
  );
}
