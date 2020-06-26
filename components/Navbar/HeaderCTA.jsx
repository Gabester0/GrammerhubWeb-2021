const HeaderCTA = () => (
  <div>
    <div className="header-btn">
      <a href="">Join Us</a>
    </div>
    <style jsx>{`
      .header-btn {
        position: relative;
        top: -1px;
        padding: 8px 30px;
        display: inline-block;
        background: linear-gradient(#c1c1c1, #d4d4d4);
        border-radius: 4px;
      }

      .header-btn a {
        color: #311569;
        font-size: 24px;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
      }

      .header-btn:hover {
        color: #d5d8d6;
        background: #f1f1f1;
        transition: all linear 0.5s;
        -webkit-transition: all linear 0.5s;
        -moz-transition: all linear 0.5s;
        -ms-transition: all linear 0.5s;
        -o-transition: all linear 0.5s;
      }
    `}</style>
  </div>
);

export default HeaderCTA;
