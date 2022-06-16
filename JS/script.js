((d)=>{
    const $submit = d.querySelector("input[type='submit']"),
        $input = d.querySelector("input[type='email']"),
        span = d.createElement("span"),
        alertIcon = d.createElement("div"),
        pattern = $input.pattern,
        regex = new RegExp(pattern);

        span.textContent = $input.title;
        span.classList.add("error", "none");
        alertIcon.classList.add("error-icon", "none");

        $input.insertAdjacentElement("afterend", span);
        $submit.insertAdjacentElement("beforebegin", alertIcon);

        $submit.addEventListener("click", e =>{
            e.preventDefault();
            
            if($input.value === "" || !regex.exec($input.value)){
                span.classList.remove("none");
                alertIcon.classList.remove("none");
                $input.setAttribute("required", "");
            } else{
                span.classList.add("none");
                alertIcon.classList.add("none");
                $input.removeAttribute("required", "");
            }
        })
}
) (document);