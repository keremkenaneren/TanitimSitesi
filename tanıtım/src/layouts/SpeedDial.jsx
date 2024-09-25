import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function SpeedDial() {
    return (
        <div className="fixed end-6 bottom-6 group">
            <a href="https://wa.me/+905344666200" className="text-blue-500 hover:underline">
                <button
                    type="button"
                    data-dial-toggle="speed-dial-menu-default"
                    aria-controls="speed-dial-menu-default"
                    aria-expanded="false"
                    className="flex items-center justify-center text-white bg-[#25D366] rounded-full w-16 h-16 hover:bg-[#128C7E] focus:ring-4 focus:ring-green-300 focus:outline-none"
                >
                    <WhatsAppIcon fontSize="large" />
                    <span className="sr-only">WhatsApp</span>
                </button>
            </a>
        </div>
    );
}

export default SpeedDial;
