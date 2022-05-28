"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[4075],{85298:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return n},metadata:function(){return d},toc:function(){return u}});var a=r(87462),o=r(63366),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 3.5.2",tags:["Release notes","Moodle 3.5"],sidebar_position:2,moodleVersion:"3.5.2"},p=void 0,d={unversionedId:"releases/3.5/3.5.2",id:"releases/3.5/3.5.2",title:"Moodle 3.5.2",description:"Release date: 10 September 2018",source:"@site/general/releases/3.5/3.5.2.md",sourceDirName:"releases/3.5",slug:"/releases/3.5/3.5.2",permalink:"/devdocs/general/releases/3.5/3.5.2",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.5/3.5.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.5",permalink:"/devdocs/general/tags/moodle-3-5"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653737125,formattedLastUpdatedAt:"28/05/2022",sidebarPosition:2,frontMatter:{title:"Moodle 3.5.2",tags:["Release notes","Moodle 3.5"],sidebar_position:2,moodleVersion:"3.5.2"},sidebar:"releaseNotes",previous:{title:"Moodle 3.5.1",permalink:"/devdocs/general/releases/3.5/3.5.1"},next:{title:"Moodle 3.5.3",permalink:"/devdocs/general/releases/3.5/3.5.3"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 10 September 2018"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.5.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.5.2"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61652"},"MDL-61652")," - Configuration as to who can download ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Data_privacy"},"SAR data")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62026"},"MDL-62026")," - Privacy officer can mark general enquiries as complete"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62660"},"MDL-62660")," - Option to set a data request expiry time"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57741"},"MDL-57741")," - Launch URL for ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Publish_as_LTI_tool"},"Publish as LTI tool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57977"},"MDL-57977")," - Global search allows searching for users by alternate name")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60826"},"MDL-60826")," - Memory exhaustion error when trying to add/edit calendar event as admin"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60874"},"MDL-60874")," - Clearer search results in user enrolment"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62782"},"MDL-62782")," - Users with the capability mod/assign:viewgrades can also view uploaded feedback files"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62849"},"MDL-62849")," - Filemanager: cannot manage files when there are folders"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62534"},"MDL-62534")," - Empty course sections deleted when upgrading"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62600"},"MDL-62600")," - Admin is misinformed that there are no data requests"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61351"},"MDL-61351")," - Shibboleth logout does not handle file sessions correctly"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62996"},"MDL-62996")," - Missing upgrade.php file on tool_dataprivacy may cause errors when upgrading from 3.3 or 3.4"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62643"},"MDL-62643")," - Online text assignment submissions generate a blank HTML document for grading when no text is entered"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61515"},"MDL-61515"),' - The current core php-css-parser prefixing library does not support sass syntax "@supports"'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61424"},"MDL-61424")," - When token is rejected from moodle.net provide option to unregister"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59847"},"MDL-59847")," - Behaviour when city/country are hiddenfields and identityfields at the same time"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62965"},"MDL-62965")," - User profile fields missing on signup page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62889"},"MDL-62889")," - Multiple fixes when redirecting to a URL after clicking on a notification"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62989"},"MDL-62989")," - Data requests are listed by date requested for users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62896"},"MDL-62896")," - Some non-core plugins are missing their Additional label on the Plugin data registry page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62993"},"MDL-62993")," - External tool Message in Membership Service not in an Array"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62969"},"MDL-62969")," - External tool LtiLinkMemberships URL is invalid"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62581"},"MDL-62581")," - Boost Course restore screen styling improvements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62769"},"MDL-62769"),' - "Statistics for question positions" graph shows last shown variant, not stats for overall question'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62341"},"MDL-62341")," - 'Go back to previous page' link on All policies page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62746"},"MDL-62746")," - Boost core_tag modals content layout improvements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45389"},"MDL-45389")," - Forum index page alignment improvements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61707"},"MDL-61707")," - Pre-signup (minor check) session is not deleted upon signup"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62852"},"MDL-62852")," - All policies page lists policy type and audience")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=376023"},"MSA-18-0017")," Moodle XML import of ddwtos could lead to intentional remote code execution"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=376024"},"MSA-18-0018")," QuickForm library remote code vulnerability (upstream)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=376025"},"MSA-18-0019")," Boost theme - blog search GET parameter insufficiently filtered")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.5.2"},"Notes de mise \xe0 jour de Moodle 3.5.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.5.2"},"Notas de Moodle 3.5.2"))))}k.isMDXComponent=!0}}]);