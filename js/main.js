/* 전체 부드러운 스크롤 */
        $(document).ready(function(){
            const lenis = new Lenis()

            lenis.on('scroll', ScrollTrigger.update)

            gsap.ticker.add((time)=>{
              lenis.raf(time * 1000)
            })

            gsap.ticker.lagSmoothing(0)
        });
        
        
        let links = gsap.utils.toArray("#parallax__nav ul li a");

        links.forEach(link => {
            let element = document.querySelector(link.getAttribute("href")),

            linkST = ScrollTrigger.create({
                trigger: element,
                start: "top top"
            });

            ScrollTrigger.create({
                trigger: element,
                start: "top center",
                end: "bottom center",
                onToggle: self => setActive(link)
            });

            link.addEventListener("click", e => {
                e.preventDefault();
                gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
            });
        });

        function setActive(link) {
            links.forEach(el => el.classList.remove("active"));
            link.classList.add("active");
        }
        
        
        
        gsap.registerPlugin(ScrollTrigger);
        const horSection = gsap.utils.toArray(".port__item");

        gsap.to(horSection, {
            xPercent: -120 * (horSection.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#port",
                start: "top 56px",
                end: "+=3000",
                pin: true,
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });
        
        $(document).ready(function(){
            const headerToggle = document.getElementById("headerToggle");
            const headerNav = document.querySelector(".header__nav");

            if(headerToggle){
                headerToggle.addEventListener("click", () => {
                    headerNav.classList.toggle("show");

                    headerToggle.getAttribute("aria-expanded") === "true" 
                    ? headerToggle.setAttribute("aria-expanded", "false") 
                    : headerToggle.setAttribute("aria-expanded", "true");
                });
            }
        });
        
        
        $(document).ready(function(){
            let links = gsap.utils.toArray(".header__nav ul li a");

            links.forEach(link => {
                let element = document.querySelector(link.getAttribute("href")),

                linkST = ScrollTrigger.create({
                    trigger: element,
                    start: "top top"
                });

                ScrollTrigger.create({
                    trigger: element,
                    start: "top center",
                    end: "bottom center",
                    onToggle: self => setActive(link)
                });

                link.addEventListener("click", e => {
                    e.preventDefault();
                    gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
                });
            });

            function setActive(link) {
                links.forEach(el => el.classList.remove("active"));
                link.classList.add("active");
            }
        });



$("#popupClose").on("click", function(e){

   e.preventDefault();

   window.close();

});


