import Card from './Card';
import cardImage1 from '../public/images/cards/1.jpg';
export default function ProductList() {
  return (
    <div className="flex items-center justify-center text-center pb-10 lg:pb-20">
      <div className="flex gap-5 lg:gap-10">
        <div className="shadow-lg rounded-box">
          <p className="text-lg uppercase font-bold mb-5">Senapan Angin</p>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <Card
              cardImage={cardImage1}
              head={'Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK'}
              price={'32.000.000,00'}
            ></Card>
            <Card
              cardImage={cardImage1}
              head={'Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK'}
              price={'32.000.000,00'}
            ></Card>
            <Card
              cardImage={cardImage1}
              head={'Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK'}
              price={'32.000.000,00'}
            ></Card>
            <Card
              cardImage={cardImage1}
              head={'Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK'}
              price={'32.000.000,00'}
            ></Card>
            <Card
              cardImage={cardImage1}
              head={'Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK'}
              price={'32.000.000,00'}
            ></Card>
            <Card
              cardImage={cardImage1}
              head={'Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK'}
              price={'32.000.000,00'}
            ></Card>
          </div>
        </div>
        <div className="shadow-lg rounded-box">
          <p className="text-lg uppercase font-bold mb-5">Pistol Angin</p>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <Card
              cardImage={cardImage1}
              head={'Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK'}
              price={'32.000.000,00'}
            ></Card>
            <Card
              cardImage={cardImage1}
              head={'Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK'}
              price={'32.000.000,00'}
            ></Card>
            <Card
              cardImage={cardImage1}
              head={'Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK'}
              price={'32.000.000,00'}
            ></Card>
            <Card
              cardImage={cardImage1}
              head={'Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK'}
              price={'32.000.000,00'}
            ></Card>
            <Card
              cardImage={cardImage1}
              head={'Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK'}
              price={'32.000.000,00'}
            ></Card>
            <Card
              cardImage={cardImage1}
              head={'Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK'}
              price={'32.000.000,00'}
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
