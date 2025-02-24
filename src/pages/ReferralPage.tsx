import StarBackground from "@/components/StarBackground.tsx";
import {trefoil} from 'ldrs';
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ReferralClickResponse} from "@/schemas/ApiResponses/ReferralResponseSchemas.ts";
import SiteLogo from "@/components/SiteLogo.tsx";
import wait from "waait";
import {APP_BACKEND_API_URL} from "@/constants.ts";

export default function ReferralPage() {
    const navigate = useNavigate();
    const referralCode = useParams<'referral_code'>().referral_code;
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${APP_BACKEND_API_URL}/services/referral/` + referralCode, {
                    method: 'GET',
                }).then(response => response.json()).then(data => ReferralClickResponse.safeParseAsync(data));

                if (response.success) {
                    window.location.replace(response.data.payload.url);
                } else {
                    setError(true);
                    await wait(4000);
                    navigate('/');
                }
            } catch (e) {
                console.error(e);
                setError(true);
                await wait(4000);
                navigate('/');
            }
        })();
    }, [navigate, referralCode]);

    trefoil.register();

    return (
        <>
            <StarBackground/>
            <div className="flex items-center justify-center fixed w-screen h-screen z-40">
                <div className="grid w-72 h-96 bg-gray-900 rounded-3xl p-4 overflow-clip">
                    <div className="w-auto h-24 flex mt-10 items-center justify-center flex-col">
                        <SiteLogo className="mt-2"/>
                        <h1 className="mt-14 font-bold text-2xl">Redirecting</h1>
                        {error ? (<>
                            <p className="text-red-500">An error occurred while redirecting</p>
                            <p className="text-red-500">Redirecting to Landing Page instead</p>
                        </>) : null}
                    </div>
                    <div className="w-auto h-max flex items-center justify-center">
                        {/*<l-trefoil*/}
                        {/*    size="60"*/}
                        {/*    stroke="6"*/}
                        {/*    stroke-length="0.30"*/}
                        {/*    bg-opacity="0.1"*/}
                        {/*    speed="1.4"*/}
                        {/*    color="white"*/}
                        {/*></l-trefoil>*/}
                    </div>
                </div>
            </div>
        </>
    );
}