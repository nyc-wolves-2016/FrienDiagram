class mySidenavmenu extends React.Component {
  renderActiveLinks() {
    if(this.props.current_user) {
      const { id, first_name, last_name, email } = this.props.current_user
      return(
          <ul id="slide-out" className="side-nav fixed">
            <li>
              <div className="userView">
                <svg width="120" height="80" className="sidebar-logo">
                  <g id="svg_1" className="selected" transform="rotate(-1.0535558462142944 50.84882354736353,30.393455505371236) ">
                    <path
                    fill="#1DACD6" d="M32.822102338321685,60.808709291843456 C22.651021338321687,59.55492229184347 14.029789338321686,53.607402291843414 9.455356538321686,44.68871729184343 C6.439845138321686,38.809430291843455 5.436463338321686,32.33166729184336 6.537316238321685,25.850048291843457 C7.581669238321686,19.701090291843457 10.578987238321686,13.959809291843385 15.016499338321687,9.608404291843385 c2.657876,-2.6063 4.6310210000000005,-4.025145 7.765256,-5.583821 c6.54531,-3.255027 13.784449,-4.003091 20.98521,-2.168529 c2.014112,0.513142 3.448457,1.050823 5.622374,2.107611 l1.782139,0.866337 l1.490452,-0.751256 c8.575385,-4.322394 18.850365,-4.253163 27.367813,0.18439900000000034 c2.804176,1.460965 4.947933,3.046703 7.322432,5.4164 c2.600892,2.595632 4.177574,4.795171 5.782917,8.067415 c1.3480750000000001,2.747844 2.179086,5.327571 2.6919850000000007,8.356795 c0.317203,1.873427 0.434105,5.793999 0.23211900000000021,7.784639 c-0.968882,9.548667 -6.299185,17.934659 -14.526408,22.853927 c-3.210028,1.919358 -6.5752690000000005,3.151493 -10.491502,3.841314 c-1.846333,0.3252210000000003 -5.84271,0.4469150000000006 -7.902903,0.240653 c-3.623527,-0.362779 -7.386328,-1.472506 -10.667357,-3.146022 l-1.330719,-0.6787440000000025 l-1.299041,0.6739520000000011 c-2.566544,1.331545 -5.581414,2.338163 -8.603931,2.8727210000000003 c-1.458066,0.257871 -2.102783,0.3046750000000003 -4.61669,0.3351490000000003 c-1.6070760000000002,0.01948000000000004 -3.31642,-0.013200000000000036 -3.798543,-0.07264000000000002 zm7.071133,-3.341904 c2.3934800000000003,-0.3396820000000009 5.104763,-1.13014 7.383971,-2.152752 c0.6529580000000015,-0.29296200000000056 0.7531610000000006,-0.37444800000000056 0.6136320000000006,-0.4990110000000003 c-0.09172000000000036,-0.08188000000000002 -0.6138200000000015,-0.5216440000000011 -1.160226,-0.9772529999999984 C39.78393633832169,48.0454472918434 35.771869338321686,38.959232291843364 36.135967338321684,29.84385829184339 C36.44971033832169,21.98910129184344 39.58285433832169,14.905737291843366 45.157279338321686,9.448605291843364 c0.722311,-0.707113 1.6580530000000002,-1.5486360000000001 2.0794230000000002,-1.8700510000000001 c0.42137100000000055,-0.32141600000000087 0.7691540000000011,-0.618845000000002 0.7728510000000006,-0.6609550000000017 c0.012720000000000021,-0.14491600000000046 -2.858937,-1.288522 -4.225651,-1.6828190000000007 c-3.011457,-0.8688040000000012 -5.407608,-1.170189 -8.504173,-1.069644 c-5.690775,0.1847790000000003 -10.74281,1.9824629999999976 -15.404201,5.481335 c-1.3011780000000002,0.976674 -3.644575,3.258469 -4.629298,4.507608 c-4.6702951000000015,5.924352 -6.6533894,13.184819 -5.6216684,20.581946 c1.2836307,9.203243 7.6436744,17.392928 16.2577174,20.934695 c4.482539,1.8430490000000006 9.315017,2.462532 14.010956,1.7960850000000002 zm28.109217,0.19115600000000021 C74.40298433832169,57.17431129184342 80.07584533832168,54.65890029184345 84.67102533832168,50.26692629184345 C93.12705833832169,42.18483329184346 95.35777233832168,29.639095291843432 90.20590433832169,19.138272291843464 C86.10456733832169,10.77870129184339 78.06127833832169,5.2020442918434355 68.71250533832169,4.23624729184337 c-1.643189,-0.16975400000000046 -4.973041,-0.0763 -6.656975,0.1868360000000003 c-1.3900350000000001,0.21720900000000043 -3.460663,0.7356140000000011 -4.709496,1.179076 c-1.156434,0.410652 -3.019189,1.224451 -3.014722,1.3170700000000002 c0.0020000000000000044,0.04121000000000011 0.2281310000000003,0.2439230000000003 0.50254,0.4504660000000003 c1.994012,1.500853 4.616865,4.340248 6.244903,6.76048 c4.8821270000000005,7.25774 6.361491,16.291382 4.054818,24.760488 c-1.57054,5.766345 -5.12701,11.309115 -9.659551,15.054439 c-0.6272800000000006,0.518335 -1.115445,0.982985 -1.084809,1.032556 c0.09094000000000019,0.14713500000000004 2.4774700000000003,1.113347 3.7315240000000003,1.510742 c2.360315,0.7479580000000012 4.920256,1.168455 7.719468,1.268006 c0.3214150000000006,0.011430000000000032 1.294426,-0.03287000000000011 2.1622470000000003,-0.09844000000000026 zM52.24558633832169,52.34079629184339 c1.040105,-0.780611 2.841208,-2.377995 3.107717,-2.7562100000000003 c0.134329,-0.19063100000000024 0.0997600000000004,-0.2248560000000003 -0.350634,-0.347184000000001 c-0.274809,-0.07464000000000012 -2.801352,-0.7525290000000011 -5.614539,-1.506424 c-4.960452,-1.329334 -5.109001,-1.361567 -4.920037,-1.067588 c0.627766,0.976634 2.4821,3.03512 3.723497,4.133431 c1.020441,0.902823 2.826867,2.305807 2.968864,2.305807 c0.03853000000000008,0 0.526836,-0.342825000000001 1.085132,-0.7618320000000006 zm6.960452,-7.763206 c0.402498,-0.676627000000002 0.7311420000000006,-1.283739 0.7303210000000011,-1.349141 c-0.0017000000000000055,-0.132803 -19.496596,-5.3795280000000005 -19.600882,-5.275241 c-0.08482000000000019,0.08482000000000019 0.945358,3.06638 1.353984,3.918723 l0.3110610000000003,0.6488360000000006 l7.887542,2.114479 l7.887542,2.114479 l0.34930800000000123,-0.470953 c0.19212,-0.259025 0.6786260000000017,-1.024556 1.081124,-1.701182 zm2.429581,-5.295814 c0.368001,-1.161912 0.8731950000000016,-3.209711 0.8734050000000011,-3.5403450000000003 c0.00011700000000000035,-0.1961040000000003 -0.14018,-0.2754500000000003 -0.7887770000000006,-0.44607800000000086 C61.28633633832169,35.18120229184342 56.134979338321685,33.80272829184344 50.27278833832169,32.23207629184344 C44.41059633832169,30.661424291843446 39.55108033832168,29.37634529184345 39.47386533832169,29.37634529184345 c-0.178178,0 -0.08251000000000012,4.528869 0.10273700000000002,4.863373 c0.09711000000000027,0.17535 2.332781,0.8151430000000006 10.855383,3.106531 c5.9032,1.587137 10.770248,2.888868 10.815663,2.8927370000000003 c0.04542000000000009,0.003900000000000011 0.22000300000000034,-0.42687500000000056 0.3879710000000006,-0.95721 zm1.300083,-8.999624 c-0.10149200000000012,-2.8130800000000002 -0.08057000000000014,-2.737896 -0.8201470000000006,-2.9466200000000002 c-1.39371,-0.3933310000000003 -20.722765,-5.5449090000000005 -20.929818,-5.578213 c-0.1931610000000003,-0.031070000000000073 -0.2836100000000003,0.14228600000000027 -0.6080460000000006,1.165387 c-0.209623,0.6610380000000012 -0.4817120000000003,1.6658850000000007 -0.6046430000000016,2.232994 l-0.22351100000000046,1.031108 l11.525917,3.100671 c6.339254,1.70537 11.573457,3.106754 11.63156,3.114186 c0.06202000000000012,0.007900000000000032 0.07387,-0.8672480000000012 0.028690000000000035,-2.119513 zM61.63717933832169,22.640396291843444 C61.05615733832168,20.861109291843377 60.35825633832169,19.294168291843448 60.097445338321684,19.18335529184344 C59.50772133832169,18.932799291843367 44.572780338321685,15.013943291843361 44.516539338321685,15.095003291843454 c-0.9824829999999979,1.416047 -2.303445,3.620072 -2.211518,3.6899170000000003 c0.147073,0.11174500000000022 19.684815,5.272442 19.712571,5.206875 c0.018900000000000035,-0.04465000000000016 -0.1522830000000003,-0.6527820000000006 -0.38041300000000056,-1.351399 zM57.652064338321686,14.912663291843387 C56.25228933832169,13.034207291843359 54.20810533832169,10.983513291843451 52.31040933832168,9.553999291843411 l-1.148419,-0.8650920000000006 l-0.6670520000000006,0.487541 c-1.008722,0.737264 -2.347599,1.873456 -3.033838,2.574561 l-0.613612,0.6269060000000006 l5.464059,1.475879 c3.005232,0.8117350000000011 5.509748,1.480669 5.56559,1.486521 c0.05584000000000007,0.005900000000000016 -0.04544000000000008,-0.18659100000000034 -0.22507300000000027,-0.4276520000000003 z" id="svg_2"/>
                  </g>
                </svg>
                <a href="#!name">
                  <span className="white-text name">{first_name + " " + last_name}</span>
                </a>
                <a href="#!email">
                  <span className="white-text email"> {email} </span>
                </a>
              </div>
            </li>
            <li><a className="waves-effect side-nav-item" href="/">Dashboard</a></li>
            <li>
            <div className="divider"></div></li>
            <li><a className="waves-effect side-nav-item" href="#events-container">My Events</a></li>
            <li><a className="waves-effect side-nav-item" href="#add_event">Create New Event</a></li>
            <li><a className="waves-effect side-nav-item" href="#add_friend">Add a Friend</a></li>
            <li><a className="waves-effect side-nav-item" href="#add_address">Add an address</a></li>
            <li><a className="waves-effect side-nav-item" data-method="delete" href="/users/sign_out">Log out</a></li>
          </ul>
      )
    }
    return (
      <ul id="slide-out" className="side-nav fixed">
        <li>
          <div className="userView">
            <svg width="120" height="80" className="sidebar-logo">
              <g id="svg_1" className="selected" transform="rotate(-1.0535558462142944 50.84882354736353,30.393455505371236) ">
                <path
                fill="#1DACD6" d="M32.822102338321685,60.808709291843456 C22.651021338321687,59.55492229184347 14.029789338321686,53.607402291843414 9.455356538321686,44.68871729184343 C6.439845138321686,38.809430291843455 5.436463338321686,32.33166729184336 6.537316238321685,25.850048291843457 C7.581669238321686,19.701090291843457 10.578987238321686,13.959809291843385 15.016499338321687,9.608404291843385 c2.657876,-2.6063 4.6310210000000005,-4.025145 7.765256,-5.583821 c6.54531,-3.255027 13.784449,-4.003091 20.98521,-2.168529 c2.014112,0.513142 3.448457,1.050823 5.622374,2.107611 l1.782139,0.866337 l1.490452,-0.751256 c8.575385,-4.322394 18.850365,-4.253163 27.367813,0.18439900000000034 c2.804176,1.460965 4.947933,3.046703 7.322432,5.4164 c2.600892,2.595632 4.177574,4.795171 5.782917,8.067415 c1.3480750000000001,2.747844 2.179086,5.327571 2.6919850000000007,8.356795 c0.317203,1.873427 0.434105,5.793999 0.23211900000000021,7.784639 c-0.968882,9.548667 -6.299185,17.934659 -14.526408,22.853927 c-3.210028,1.919358 -6.5752690000000005,3.151493 -10.491502,3.841314 c-1.846333,0.3252210000000003 -5.84271,0.4469150000000006 -7.902903,0.240653 c-3.623527,-0.362779 -7.386328,-1.472506 -10.667357,-3.146022 l-1.330719,-0.6787440000000025 l-1.299041,0.6739520000000011 c-2.566544,1.331545 -5.581414,2.338163 -8.603931,2.8727210000000003 c-1.458066,0.257871 -2.102783,0.3046750000000003 -4.61669,0.3351490000000003 c-1.6070760000000002,0.01948000000000004 -3.31642,-0.013200000000000036 -3.798543,-0.07264000000000002 zm7.071133,-3.341904 c2.3934800000000003,-0.3396820000000009 5.104763,-1.13014 7.383971,-2.152752 c0.6529580000000015,-0.29296200000000056 0.7531610000000006,-0.37444800000000056 0.6136320000000006,-0.4990110000000003 c-0.09172000000000036,-0.08188000000000002 -0.6138200000000015,-0.5216440000000011 -1.160226,-0.9772529999999984 C39.78393633832169,48.0454472918434 35.771869338321686,38.959232291843364 36.135967338321684,29.84385829184339 C36.44971033832169,21.98910129184344 39.58285433832169,14.905737291843366 45.157279338321686,9.448605291843364 c0.722311,-0.707113 1.6580530000000002,-1.5486360000000001 2.0794230000000002,-1.8700510000000001 c0.42137100000000055,-0.32141600000000087 0.7691540000000011,-0.618845000000002 0.7728510000000006,-0.6609550000000017 c0.012720000000000021,-0.14491600000000046 -2.858937,-1.288522 -4.225651,-1.6828190000000007 c-3.011457,-0.8688040000000012 -5.407608,-1.170189 -8.504173,-1.069644 c-5.690775,0.1847790000000003 -10.74281,1.9824629999999976 -15.404201,5.481335 c-1.3011780000000002,0.976674 -3.644575,3.258469 -4.629298,4.507608 c-4.6702951000000015,5.924352 -6.6533894,13.184819 -5.6216684,20.581946 c1.2836307,9.203243 7.6436744,17.392928 16.2577174,20.934695 c4.482539,1.8430490000000006 9.315017,2.462532 14.010956,1.7960850000000002 zm28.109217,0.19115600000000021 C74.40298433832169,57.17431129184342 80.07584533832168,54.65890029184345 84.67102533832168,50.26692629184345 C93.12705833832169,42.18483329184346 95.35777233832168,29.639095291843432 90.20590433832169,19.138272291843464 C86.10456733832169,10.77870129184339 78.06127833832169,5.2020442918434355 68.71250533832169,4.23624729184337 c-1.643189,-0.16975400000000046 -4.973041,-0.0763 -6.656975,0.1868360000000003 c-1.3900350000000001,0.21720900000000043 -3.460663,0.7356140000000011 -4.709496,1.179076 c-1.156434,0.410652 -3.019189,1.224451 -3.014722,1.3170700000000002 c0.0020000000000000044,0.04121000000000011 0.2281310000000003,0.2439230000000003 0.50254,0.4504660000000003 c1.994012,1.500853 4.616865,4.340248 6.244903,6.76048 c4.8821270000000005,7.25774 6.361491,16.291382 4.054818,24.760488 c-1.57054,5.766345 -5.12701,11.309115 -9.659551,15.054439 c-0.6272800000000006,0.518335 -1.115445,0.982985 -1.084809,1.032556 c0.09094000000000019,0.14713500000000004 2.4774700000000003,1.113347 3.7315240000000003,1.510742 c2.360315,0.7479580000000012 4.920256,1.168455 7.719468,1.268006 c0.3214150000000006,0.011430000000000032 1.294426,-0.03287000000000011 2.1622470000000003,-0.09844000000000026 zM52.24558633832169,52.34079629184339 c1.040105,-0.780611 2.841208,-2.377995 3.107717,-2.7562100000000003 c0.134329,-0.19063100000000024 0.0997600000000004,-0.2248560000000003 -0.350634,-0.347184000000001 c-0.274809,-0.07464000000000012 -2.801352,-0.7525290000000011 -5.614539,-1.506424 c-4.960452,-1.329334 -5.109001,-1.361567 -4.920037,-1.067588 c0.627766,0.976634 2.4821,3.03512 3.723497,4.133431 c1.020441,0.902823 2.826867,2.305807 2.968864,2.305807 c0.03853000000000008,0 0.526836,-0.342825000000001 1.085132,-0.7618320000000006 zm6.960452,-7.763206 c0.402498,-0.676627000000002 0.7311420000000006,-1.283739 0.7303210000000011,-1.349141 c-0.0017000000000000055,-0.132803 -19.496596,-5.3795280000000005 -19.600882,-5.275241 c-0.08482000000000019,0.08482000000000019 0.945358,3.06638 1.353984,3.918723 l0.3110610000000003,0.6488360000000006 l7.887542,2.114479 l7.887542,2.114479 l0.34930800000000123,-0.470953 c0.19212,-0.259025 0.6786260000000017,-1.024556 1.081124,-1.701182 zm2.429581,-5.295814 c0.368001,-1.161912 0.8731950000000016,-3.209711 0.8734050000000011,-3.5403450000000003 c0.00011700000000000035,-0.1961040000000003 -0.14018,-0.2754500000000003 -0.7887770000000006,-0.44607800000000086 C61.28633633832169,35.18120229184342 56.134979338321685,33.80272829184344 50.27278833832169,32.23207629184344 C44.41059633832169,30.661424291843446 39.55108033832168,29.37634529184345 39.47386533832169,29.37634529184345 c-0.178178,0 -0.08251000000000012,4.528869 0.10273700000000002,4.863373 c0.09711000000000027,0.17535 2.332781,0.8151430000000006 10.855383,3.106531 c5.9032,1.587137 10.770248,2.888868 10.815663,2.8927370000000003 c0.04542000000000009,0.003900000000000011 0.22000300000000034,-0.42687500000000056 0.3879710000000006,-0.95721 zm1.300083,-8.999624 c-0.10149200000000012,-2.8130800000000002 -0.08057000000000014,-2.737896 -0.8201470000000006,-2.9466200000000002 c-1.39371,-0.3933310000000003 -20.722765,-5.5449090000000005 -20.929818,-5.578213 c-0.1931610000000003,-0.031070000000000073 -0.2836100000000003,0.14228600000000027 -0.6080460000000006,1.165387 c-0.209623,0.6610380000000012 -0.4817120000000003,1.6658850000000007 -0.6046430000000016,2.232994 l-0.22351100000000046,1.031108 l11.525917,3.100671 c6.339254,1.70537 11.573457,3.106754 11.63156,3.114186 c0.06202000000000012,0.007900000000000032 0.07387,-0.8672480000000012 0.028690000000000035,-2.119513 zM61.63717933832169,22.640396291843444 C61.05615733832168,20.861109291843377 60.35825633832169,19.294168291843448 60.097445338321684,19.18335529184344 C59.50772133832169,18.932799291843367 44.572780338321685,15.013943291843361 44.516539338321685,15.095003291843454 c-0.9824829999999979,1.416047 -2.303445,3.620072 -2.211518,3.6899170000000003 c0.147073,0.11174500000000022 19.684815,5.272442 19.712571,5.206875 c0.018900000000000035,-0.04465000000000016 -0.1522830000000003,-0.6527820000000006 -0.38041300000000056,-1.351399 zM57.652064338321686,14.912663291843387 C56.25228933832169,13.034207291843359 54.20810533832169,10.983513291843451 52.31040933832168,9.553999291843411 l-1.148419,-0.8650920000000006 l-0.6670520000000006,0.487541 c-1.008722,0.737264 -2.347599,1.873456 -3.033838,2.574561 l-0.613612,0.6269060000000006 l5.464059,1.475879 c3.005232,0.8117350000000011 5.509748,1.480669 5.56559,1.486521 c0.05584000000000007,0.005900000000000016 -0.04544000000000008,-0.18659100000000034 -0.22507300000000027,-0.4276520000000003 z" id="svg_2"/>
              </g>
            </svg>
          </div>
        </li>
        <li><a className="waves-effect" href="/">Home</a></li>
        <li><div className="divider"></div></li>
        <li><a className="waves-effect" href="/users/sign_in">Login</a></li>
        <li><a className="waves-effect" href="/users/sign_up">Sign up</a></li>
        <li><a className="waves-effect" href="#!">About</a></li>
      </ul>
    )
  }

  render() {
    return(
      <div>
        {this.renderActiveLinks()}
      </div>
    );
  }
}
