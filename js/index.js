function genesysWidget(sDeploymentID) {
  Window.Genesys = null;
  (function (g, e, n, es, ys) {
    g["_genesysJs"] = e;
    g[e] =
      g[e] ||
      function () {
        (g[e].q = g[e].q || []).push(arguments);
      };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement("script");
    ys.async = 1;
    ys.src = n;
    ys.charset = "utf-8";
    document.head.appendChild(ys);
  })(
    window,
    "Genesys",
    "https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js",
    {
      environment: "prod",
      deploymentId: sDeploymentID ,
    }
  );
  subscribingToEvents();
  }
  
function BtnInciarCobrowse() {
    let PIN = document.getElementById("cobrowsePIN").value;
    Genesys("command", "CobrowseService.acceptSession", {
      joinCode: PIN
      },   
      // fulfilled callback   
      () => {
        console.log("Co-browse session successfully accepted");
      },
      // rejected callback
      err => {
        console.log("could not accept Co-browse session, error code: ", err.code);
      }
      );
}

function BtnDetenerCobrowse() {
  Genesys("command", "CobrowseService.stopSession", {
    function() {
        console.log("Co-browse session successfully stopped");
    },
    function() {
        /*rejected callback*/
    }
  });
}

function BntEscribir(param) {
  Genesys("command", "CobrowseService." + param,
    {},
        function() {
          console.log(`CobrowseService.${param} ok`);
        },
        function() {
          console.log(`CobrowseService.${param} error`);
        }
    );
}

function subscribingToEvents() {
  Genesys("subscribe", "Messenger.ready", function(o){
    console.log("*******Messenger.ready  Inicio *******");
    console.log(o);
    });
}


genesysWidget('af5f8e01-a262-4c16-aa04-cdb544818d95');



