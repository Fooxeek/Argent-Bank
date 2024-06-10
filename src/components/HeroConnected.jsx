export default function HeroConnected() {
  return (
    <div className="font-semibold flex justify-center items-center flex-col">
      <div className="text-center">
        <h1 className="text-white text-3xl pt-5">Welcome back</h1>
        <h1 className="text-white text-3xl pb-5">Guest</h1>
        <div className="flex justify-center">
          <button className="bg-greenButton border border-greenButton text-white p-2 mb-5 shadow-custom active:shadow-customActive transition-shadow">
            Edit Name
          </button>
        </div>
      </div>
    </div>
  );
}
