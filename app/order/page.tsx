// @flow
import Footer from '@/components/elemets/footer';
import { OrderForm } from './order-form';

export default function Page() {
    return (
        <>
            <div className="w-full min-h-screen bg-slate-900 text-slate-50">
                <div className="container-lg pt-[120px] flex flex-col items-center">
                    <p className="page-title">
                        Form Order
                    </p>
                    <div className="card-form mt-12">
                        <OrderForm />
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};