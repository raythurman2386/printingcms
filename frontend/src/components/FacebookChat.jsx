import ChatLogo from "./ChatLogo";

const FacebookChat = () => {
  return (
    <>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat">
        <ChatLogo height={15} width={15} fill="#FFF" />
      </div>

      <script>
        {`var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "102707405641152");
      chatbox.setAttribute("attribution", "biz_inbox");`}
      </script>

      <script>
        {`window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v17.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`}
      </script>
    </>
  );
};

export default FacebookChat;
