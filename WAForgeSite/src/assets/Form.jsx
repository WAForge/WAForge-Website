const Form = () => {
    function Submit(e){
        const formEle = document.querySelector('.form');
        e.preventDefault();
        const formDatab = new FormData(formEle);
        fetch("https://script.google.com/macros/s/AKfycbxpUSe8hW86h6jdIa3t5TXWirMO78rLAAjKu2R7sEuJphqBZqbPX3mjbqA_RS2BgF7A/exec",       
        {
            method: "POST",
            body: formDatab
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
            }
    return ( 
        <div className="flex flex-col items-center justify-center h-fit text-white">
            <div className="max-w-lg p-6 rounded-lg shadow-lg">
                <form className="form" onSubmit={(e)=>Submit(e)}>
                <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-1 mb-4 bg-[#00000000] border-2 border-[#00dc82] rounded-lg focus:outline-none focus:border-teal-500"
                />
                <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-1 mb-4 bg-[#00000000] border-2 border-[#00dc82] rounded-lg focus:outline-none focus:border-teal-500"
                />
                <button
                type="submit"
                className="w-full px-4 py-1 border-[#00dc82] border-2 text-[#ffffff] font-Montserrat rounded-lg focus:outline-none transition-all duration-2 hover:text-black hover:bg-[#00dc82]"
                >
                Submit
                </button>
                </form>
            </div>
    </div>
     );
}
 
export default Form;