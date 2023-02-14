function SubscribeForm(){
    return(
      <div className="">
 
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6"></section>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl space-y-8">
            <div className=" grid grid-rows-2 grid-flow-col gap-4 space-y-5 rounded-md shadow-xl p-5 columns-2 border-t-8 border-teal-800">
              <h2 className=" text-left text-5xl font-normal tracking-tight text-gray-900">
               Subscribe to our Newsletter
              </h2>
              <p>Receive updates and announcements about new vendors and produce listings!</p> 
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className=" grid grid-rows-1  space-y-5 rounded-md shadow-xl p-8 columns-2 border-t-8 border-orange-400">
              <link
    href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
    rel="stylesheet"
    type="text/css"
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n"
    }}
  />
  <div id="mc_embed_signup">
    <form
      action="https://hotmail.us11.list-manage.com/subscribe/post?u=801b68ed218b69c7a62f9360f&id=df26ba704b&f_id=002551e0f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate=""
    >
      <div id="mc_embed_signup_scroll">
        <div className="indicates-required">
          <span className="asterisk">*</span> indicates required
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">
            Email Address <span className="asterisk">*</span>
          </label>
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            required=""
          />
          <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-FNAME">First Name </label>
          <input
            type="text"
            defaultValue=""
            name="FNAME"
            className=""
            id="mce-FNAME"
          />
          <span id="mce-FNAME-HELPERTEXT" className="helper_text" />
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-LNAME">Last Name </label>
          <input
            type="text"
            defaultValue=""
            name="LNAME"
            className=""
            id="mce-LNAME"
          />
          <span id="mce-LNAME-HELPERTEXT" className="helper_text" />
        </div>
        <div id="mce-responses" className="clear foot">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>{" "}
       
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_801b68ed218b69c7a62f9360f_df26ba704b"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <div className="optionalParent">
          <div className="clear foot">
            <input
              type="submit"
              defaultValue="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
        
          </div>
        </div>
      </div>
    </form>
  </div>
        
              </div>

             
   
            </form>
          </div>
        </div>
      </main>
    </div>
 

    )}
    export default SubscribeForm
