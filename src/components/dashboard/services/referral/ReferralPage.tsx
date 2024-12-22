import StarBackground from "@/components/StarBackground.tsx";
import {trefoil} from 'ldrs';
import {server_url} from "@/communicator/ApiCommunicator.ts";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ReferralClickSuccessResponse} from "@/schemas/ApiResponses/ReferralResponseSchemas.ts";

export default function ReferralPage() {
    const navigate = useNavigate();
    const referralCode = useParams<'referral_code'>().referral_code;

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${server_url}/services/referral/` + referralCode, {
                    method: 'GET',
                });

                if (response.ok) {
                    const referralResponse = ReferralClickSuccessResponse.parse(await response.json());
                    window.location.href = referralResponse.payload.pointer;
                    return null;
                } else {
                    navigate('/');
                }
            } catch (e) {
                navigate('/');
            }
        })();
    }, []);

    trefoil.register();

    return (
        <>
            <StarBackground/>
            <div className="flex items-center justify-center fixed w-screen h-screen z-40">
                <div className="grid w-72 h-96 bg-gray-900 rounded-3xl p-4 overflow-clip">
                    <div className="w-auto h-24 flex mt-10 items-center justify-center flex-col">
                        <h1 className="font-bold text-2xl">Redirecting</h1>
                        <p className="mt-10 text-center">Please permit this site to redirect to other sites</p>
                    </div>
                    <div className="w-auto h-max flex items-center justify-center">
                        <l-trefoil
                            size="60"
                            stroke="6"
                            stroke-length="0.30"
                            bg-opacity="0.1"
                            speed="1.4"
                            color="white"
                        ></l-trefoil>
                    </div>
                </div>
            </div>
        </>
    );
}