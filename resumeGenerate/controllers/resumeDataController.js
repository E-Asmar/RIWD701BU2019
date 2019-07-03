var resumeDataApp = angular.module('resumeDataApp', []);

///Data Collection controller *///
//User data name and such
resumeDataApp.controller('userDataController', function($scope){
	//$scope, $http
	$scope.originalUser = {
		firstName: 'Patrick',
		lastName: 'Waite',
		phoneNumber: '978 895 5690',
		streetAddress: '80 Barrett St C6',
		city: 'Northampton',
		state: 'MA',
		zipCode: '01060',

	};
	$scope.storeage = {};
	
	$scope.update = function(user){
		$scope.storeage = angular.copy(user);
		console.log($scope.storeage);
		window.localStorage.setItem('user', JSON.stringify($scope.storeage));
	}
	$scope.reset = function(){
		$scope.user = angular.copy($scope.storeage);
	}
	if(window.localStorage.getItem('user') != null){
		$scope.user = angular.copy(JSON.parse(window.localStorage.getItem('user')));
		console.log('pulling from local storage');
	}else{
		$scope.user = angular.copy($scope.storeage);
		console.log("not pulling from local storage");
	}

});

resumeDataApp.controller('skillDataController', function($scope){
	$scope.skills = [
						{skill: "JavaScript"},
						{skill: "HTML5"},
						{skill: "AngularJS"},
					];

	$scope.skillUpdate = function(skills){
		$scope.skills = angular.copy(skills);
		console.log("localStorageUpdate: " + $scope.skills);
		window.localStorage.setItem('skills', JSON.stringify($scope.skills));
	}
	if(window.localStorage.getItem('skills') != null){
		$scope.skills = angular.copy(JSON.parse(window.localStorage.getItem('skills')));
		console.log('pulling from local storage');
	}else{
		$scope.skills = angular.copy($scope.skills);
		console.log("not pulling from local storage");
	}

	$scope.addSkill = function(formToCopy){
		console.log(formToCopy);
		console.log($scope.skills);
		$scope.skills.push(angular.copy({skill: formToCopy}));

	}
	$scope.removeSkill = function(formToRemove){
		var skillIndex = $scope.skills.indexOf(formToRemove);
		console.log(skillIndex);
		$scope.skills.splice(skillIndex, 1);
		console.log($scope.skills);
		//window.localStorage.setItem('skills',JSON.stringify($scope.skills));
	}

});

resumeDataApp.controller('educationDataController', function($scope){
	$scope.schools = [{
		school: "Boston University",
		schoolLocation: "Boston MA",
		graduationYear: "2020",
		degreeProgram: "Masters of Science",
		degreeMajor: "Computer Information Systems"
	}]
	if(window.localStorage.getItem('schools') != null){
		$scope.schools = angular.copy(JSON.parse(window.localStorage.getItem('schools')));
		console.log('pulling schools from local storage');
	}else{
		$scope.schools = angular.copy($scope.schools);
		console.log("not pulling schools from local storage");
		window.localStorage.setItem('schools',JSON.stringify(angular.copy($scope.schools)));
	}
	$scope.removeSchool = function(formToRemove){
		var schoolIndex = $scope.schools.indexOf(formToRemove);
		console.log(schoolIndex);
		$scope.schools.splice(schoolIndex,1);
		console.log($scope.schools);
	}
	$scope.addSchool = function(formToCopy){
		console.log($scope.schools);
		$scope.schools.push(angular.copy({}));
	}
	$scope.saveSchools = function(schools){
		$scope.schools = angular.copy(schools);
		console.log("localStorageUpdate: "+$scope.schools);
		window.localStorage.setItem('schools', JSON.stringify($scope.schools));	
	}
});
resumeDataApp.controller('employeementDataController', function($scope){
	$scope.employements = [{
		company: "Boston University",
		position: "Student",
		jobDesc: "Learning the skills needed to earn a Masters of Science in Computer Information Systems",
		startDate: "July 2017",
		endDate: "May 2020",
		jobSkill: [
			{jSkill: "HTML5"},
			{jSkill: "AngularJS"},
		]
	}]
	if(window.localStorage.getItem('employements') != null){
		$scope.employements = angular.copy(JSON.parse(window.localStorage.getItem('employements')));
		console.log('pulling employment from local storage');
		//console.log($scope.employements[1]);
	}else{
		$scope.employements = angular.copy($scope.employements);
		console.log("not pulling employement from local storage");
		window.localStorage.setItem('employements',JSON.stringify(angular.copy($scope.employements)));
	}

	$scope.addJSkill = function(formToCopy){
		console.log(formToCopy);
		console.log($scope.employements);
		formToCopy.push(angular.copy({}));
		console.log(formToCopy);
	}
	$scope.removeJSkill = function(formToRemove){
		/*var employ = $scope.employements;
		console.log(employ.hasOwnProperty(formToRemove));
		var member, i, arr;
		//console.log(employ[0].jobSkill[2]);
		for (member in employ){
			//console.log(member);
			
			if(employ.hasOwnProperty(member) && typeof employ[member] === 'object' ){
				arr = employ[member];
				console.log(arr);
				for(i = 0; i < arr.length; i++){
					console.log(i);*/
					/*if(arr[i] === formToRemove){
						console.log('found you');
					}*/
				//}
				/*console.log(employ[member]);
				console.log('light it up');*/
				/*arr = employ[jSkill];
				for(i=0; i< arr.length; i+=1){
					console.log('jSkill' +jSkill);
				}*/
			//}
		//}

// && typeof employ[jSkill] === 'object' && employ[jSkill] instanceof Array

		console.log(formToRemove);
		console.log($scope.employement);
		var jSkillIndex = $scope.employements.indexOf(formToRemove);
		console.log(jSkillIndex);

		$scope.skills.splice(skillIndex, 1);
		console.log($scope.employements.jobSkill);
		window.localStorage.setItem('skills',JSON.stringify($scope.skills));
	}

	$scope.removeEmployement = function(formToRemove){
		var employementIndex = $scope.employements.indexOf(formToRemove);
		console.log(employementIndex);
		$scope.employements.splice(employementIndex,1);
		console.log($scope.employements);
	}
	$scope.addEmployement = function(formToCopy){
		console.log(formToCopy);
		console.log($scope.employements);
		$scope.employements.push(angular.copy({
			company: "",
			position: "",
			jobDesc: "",
			startDate: "",
			endDate: "",
			jobSkill: [
				{jSkill: ""},
			]}
			)
		);
	}
	$scope.saveEmployement = function(employements){
		$scope.employements = angular.copy(employements);
		console.log("localStorageUpdate: "+$scope.employements);
		window.localStorage.setItem('employements', JSON.stringify($scope.employements));	
	}
});

/******************Data Display Modules and controlers **************/

resumeDataApp.controller('displayData', function($scope){
	$scope.getData = function(){
		$scope.user = angular.copy(JSON.parse(window.localStorage.getItem('user')));
		$scope.skills = angular.copy(JSON.parse(window.localStorage.getItem('skills')));
		$scope.schools = angular.copy(JSON.parse(window.localStorage.getItem('schools')));
		$scope.employements = angular.copy(JSON.parse(window.localStorage.getItem('employements')));

		console.log($scope.user);
		console.log($scope.skills);
		console.log($scope.schools);
		console.log($scope.employements);
	}
	$scope.getData();

})


/***************Template selectors **********************/

resumeDataApp.controller('pageSelectorController', function($scope){
	$scope.selectors = [
		{name: 'data Collector', url: 'dataCollector.html' },
		{name: 'RESUME DISPLAYS', url: ''},
		{name: 'resume Display 1(BU theme)', url: 'resumeDisplay1.html' },
		{name: 'resume Display 2', url: 'resumeDisplay2.html'},
		{name: 'API JOB SEARCH', url: ''},
		{name: 'git Hub Jobs', url: 'gitHubJobs'},
		{name: 'USA JOBs', url: 'usaJobs.html'}
	];
	$scope.template = $scope.selectors[0];
	console.log($scope.selectors);
	console.log($scope.template.name);
});



/*********************** API call controller *************************/
resumeDataApp.controller('apiGitCallController',function($scope, $http){
/***********************USAJOBS API REquest **************************/
	
	$scope.gitRegistArr = [];

	$scope.skills = angular.copy(JSON.parse(window.localStorage.getItem('skills')));
	for(var i = 0; i < $scope.skills.length; i++){
		console.log(i);
		console.log($scope.skills[i].skill);
		var gitKey = $scope.skills[i].skill;
			$http.get(`https://cors.io/?https://jobs.github.com/positions.json?description=${gitKey}`).then(
		function success(res)
		{ console.log('success ' + gitKey)
			$scope.gitRes = angular.copy(res.data);
			//$scope.gitRegistArr.push($scope.gitRes);
			//console.log(res.data);
			console.log($scope.gitRes);
			console.log(gitKey);
			//console.log($scope.gitRegistArr);
		},
		function error(res)
		{console.log('failed')});
	}


	$scope.getJobs = function(gitKey){
	console.log($scope.gitRegistArr);
		$http.get(`https://cors.io/?https://jobs.github.com/positions.json?description=${gitKey}`)
		.then(
		function success(res)
		{ console.log('success ' + gitKey)
			$scope.gitRes = angular.copy(res.data);

			//$scope.gitRegistArr.push($scope.gitRes);
			//console.log(res.data);
			console.log( $scope.gitRes);
			console.log(gitKey);
			//console.log($scope.gitRegistArr);
		},
		function error(res)
		{console.log('failed')});
	}

});




resumeDataApp.controller('apiUSAJOBSCallController', function($scope, $http){

	var host = 'data.usajobs.gov';  
	var userAgent = 'patrickm.waite@gmail.com';  
	var authKey = 'AXw9Sb4Pgx2Rx/xNUrUdsXjj/VV7neWUY6+D2EUsnV0=';

	$scope.skills = angular.copy(JSON.parse(window.localStorage.getItem('skills')));
	
	for(var i = 0; i < $scope.skills.length; i++){
		console.log(i);
		console.log($scope.skills[i].skill);
		var usaJobsKey = $scope.skills[i].skill;
	$http.get(`https://data.usajobs.gov/api/search?Keyword=${usaJobsKey}`, {
			headers: {
				"Host": host,          
	        	"User-Agent": userAgent,          
	        	"Authorization-Key": authKey
	        }
		}).then(
		function success(res)
		{console.log('success');
			$scope.usaJobRes = angular.copy(res.data.SearchResult.SearchResultItems);
			console.log($scope.usaJobRes);
		},
			function error(res)
			{console.log('failed')});
	}

});
