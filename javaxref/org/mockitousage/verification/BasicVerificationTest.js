defineStructure(
"BasicVerificationTest",function(factory){with(factory) { typeTable(["org.mockito.Mockito","cl"],["java.util.List","it"],["org.junit.Test","an"],["org.mockito.TestBase","cl"],["org.mockito.MockitoAnnotations","cl"],["org.mockito.MockitoAnnotations$Mock","st an"],["org.mockito.exceptions.verification.ArgumentsAreDifferent","cl"],["org.mockito.exceptions.verification.NoInteractionsWanted","cl"],["org.mockito.exceptions.verification.TooManyActualInvocations","cl"],["org.mockito.exceptions.verification.WantedButNotInvoked","cl"],["org.mockitousage.IMethods","it"],["org.mockitousage.verification.BasicVerificationTest","cl"],["java.lang.SuppressWarnings","an"],["java.lang.Exception","cl"],["java.lang.Object","cl"],["junit.framework.Assert","cl"],["org.mockito.internal.progress.VerificationMode","it"],["org.mockito.internal.progress.OngoingStubbing","it"],["java.lang.Boolean","cl"],["java.lang.Class","cl"],["java.lang.String","cl"]),methodTable([11,"shouldVerify",[],"me"],[1,"clear",[],"me"],[0,"verify",[14],"st me"],[1,"add",[14],"me"],[0,"verifyNoMoreInteractions",["java.lang.Object[]"],"st me"],[11,"shouldFailVerification",[],"me"],[11,"shouldFailVerificationOnMethodArgument",[],"me"],[15,"fail",[],"st me"],[11,"shouldFailOnWrongMethod",[],"me"],[0,"verify",[14,16],"st me"],[0,"atLeastOnce",[],"st me"],[11,"shouldDetectRedundantInvocation",[],"me"],[11,"shouldDetectWhenInvokedMoreThanOnce",[],"me"],[11,"shouldVerifyStubbedMethods",[],"me"],[0,"stub",[14],"st me"],[17,"toReturn",[14],"me"],[11,"shouldDetectWhenOverloadedMethodCalled",[],"me"],[0,"mock",[19],"st me"],[10,"varargs",["java.lang.Object[]"],"me"],[10,"varargs",["java.lang.String[]"],"me"]),localVariableTable(["expected","shouldFailVerificationOnMethodArgument()-expected"],["e","shouldFailOnWrongMethod()-e"],["e","shouldDetectRedundantInvocation()-e"],["e","shouldDetectWhenInvokedMoreThanOnce()-e"],["mockThree","shouldDetectWhenOverloadedMethodCalled()-mockThree"],["e","shouldDetectWhenOverloadedMethodCalled()-e"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockitousage.verification;",nl,nl,ip,_,s," org.mockito.",T(0),".*;",nl,nl,ip," java.util.",T(1),";",nl,nl,ip," org.junit.",T(2),";",nl,ip," org.mockito.",T(3),";",nl,ip," org.mockito.",T(4),".",T(5),";",nl,ip," org.mockito.exceptions.verification.",T(6),";",nl,ip," org.mockito.exceptions.verification.",T(7),";",nl,ip," org.mockito.exceptions.verification.",T(8),";",nl,ip," org.mockito.exceptions.verification.",T(9),";",nl,ip," org.mockitousage.",T(10),";",nl,nl,C(11,[],$("@",T(12),P(L("\"unchecked\"")),nl,pu,_,c,_,I("BasicVerificationTest"),_,ex,_,T(3),_,B(nl,nl,w(4),F("@",T(5),_,pi,_,T(1),_,I("mock"),";"),nl,w(4),F("@",T(5),_,pi,_,T(1),_,I("mockTwo"),";"),nl,w(4),nl,w(4),M(0,[],[],$("@",T(2),nl,w(4),pu,_,v,_,I("shouldVerify"),P(),_,ts,_,T(13),_,B(nl,w(8),G(11,"fi","mock"),".",N(1),P(),";",nl,w(8),N(2),P(G(11,"fi","mock")),".",N(1),P(),";",nl,nl,w(8),G(11,"fi","mock"),".",N(3),P(L("\"test\"")),";",nl,w(8),N(2),P(G(11,"fi","mock")),".",N(3),P(L("\"test\"")),";",nl,nl,w(8),N(4),P(G(11,"fi","mock")),";",nl,w(4)))),nl,nl,w(4),M(5,[],[],$("@",T(2),P("expected=",T(9),".",c),nl,w(4),pu,_,v,_,I("shouldFailVerification"),P(),_,ts,_,T(13),_,B(nl,w(8),N(2),P(G(11,"fi","mock")),".",N(1),P(),";",nl,w(4)))),nl,nl,w(4),M(6,[],[],$("@",T(2),nl,w(4),pu,_,v,_,I("shouldFailVerificationOnMethodArgument"),P(),_,ts,_,T(13),_,B(nl,w(8),G(11,"fi","mock"),".",N(1),P(),";",nl,w(8),G(11,"fi","mock"),".",N(3),P(L("\"foo\"")),";",nl,nl,w(8),N(2),P(G(11,"fi","mock")),".",N(1),P(),";",nl,w(8),tr,_,B(nl,w(12),N(2),P(G(11,"fi","mock")),".",N(3),P(L("\"bar\"")),";",nl,w(12),N(7),P(),";",nl,w(8)),_,ct,_,P(V(0,$(T(6),_,I("expected")))),_,B(),nl,w(4)))),nl,nl,w(4),M(8,[],[],$("@",T(2),nl,w(4),pu,_,v,_,I("shouldFailOnWrongMethod"),P(),_,ts,_,T(13),_,B(nl,w(8),G(11,"fi","mock"),".",N(1),P(),";",nl,w(8),G(11,"fi","mock"),".",N(1),P(),";",nl,w(8),nl,w(8),G(11,"fi","mockTwo"),".",N(3),P(L("\"add\"")),";",nl,nl,w(8),N(9),P(G(11,"fi","mock"),", ",N(10),P()),".",N(1),P(),";",nl,w(8),N(9),P(G(11,"fi","mockTwo"),", ",N(10),P()),".",N(3),P(L("\"add\"")),";",nl,w(8),tr,_,B(nl,w(12),N(9),P(G(11,"fi","mockTwo"),", ",N(10),P()),".",N(3),P(L("\"foo\"")),";",nl,w(12),N(7),P(),";",nl,w(8)),_,ct,_,P(V(1,$(T(9),_,I("e")))),_,B(),nl,w(4)))),nl,nl,w(4),M(11,[],[],$("@",T(2),nl,w(4),pu,_,v,_,I("shouldDetectRedundantInvocation"),P(),_,ts,_,T(13),_,B(nl,w(8),G(11,"fi","mock"),".",N(1),P(),";",nl,w(8),G(11,"fi","mock"),".",N(3),P(L("\"foo\"")),";",nl,w(8),G(11,"fi","mock"),".",N(3),P(L("\"bar\"")),";",nl,nl,w(8),N(2),P(G(11,"fi","mock")),".",N(1),P(),";",nl,w(8),N(2),P(G(11,"fi","mock")),".",N(3),P(L("\"foo\"")),";",nl,nl,w(8),tr,_,B(nl,w(12),N(4),P(G(11,"fi","mock")),";",nl,w(12),N(7),P(),";",nl,w(8)),_,ct,_,P(V(2,$(T(7),_,I("e")))),_,B(),nl,w(4)))),nl,w(4),nl,w(4),M(12,[],[],$("@",T(2),nl,w(4),pu,_,v,_,I("shouldDetectWhenInvokedMoreThanOnce"),P(),_,ts,_,T(13),_,B(nl,w(8),G(11,"fi","mock"),".",N(3),P(L("\"foo\"")),";",nl,w(8),G(11,"fi","mock"),".",N(1),P(),";",nl,w(8),G(11,"fi","mock"),".",N(1),P(),";",nl,w(8),nl,w(8),N(2),P(G(11,"fi","mock")),".",N(3),P(L("\"foo\"")),";",nl,nl,w(8),tr,_,B(nl,w(12),N(2),P(G(11,"fi","mock")),".",N(1),P(),";",nl,w(12),N(7),P(),";",nl,w(8)),_,ct,_,P(V(3,$(T(8),_,I("e")))),_,B(),nl,w(4)))),nl,nl,w(4),M(13,[],[],$("@",T(2),nl,w(4),pu,_,v,_,I("shouldVerifyStubbedMethods"),P(),_,ts,_,T(13),_,B(nl,w(8),N(14),P(G(11,"fi","mock"),".",N(3),P(L("\"test\""))),".",N(15),P(T(18),".",G(18,"st fi","FALSE")),";",nl,w(8),nl,w(8),G(11,"fi","mock"),".",N(3),P(L("\"test\"")),";",nl,w(8),nl,w(8),N(2),P(G(11,"fi","mock")),".",N(3),P(L("\"test\"")),";",nl,w(4)))),nl,w(4),nl,nl,w(4),M(16,[],[],$("@",T(2),nl,w(4),pu,_,v,_,I("shouldDetectWhenOverloadedMethodCalled"),P(),_,ts,_,T(13),_,B(nl,w(8),V(4,$(T(10),_,I("mockThree")," = ",N(17),P(T(10),".",c),";")),nl,w(8),nl,w(8),W(4),".",N(18),P(P(T(14),"[]"),_,n,_,T(14),"[] ",B()),";",nl,w(8),tr,_,B(nl,w(12),N(2),P(W(4)),".",N(19),P(P(T(20),"[]"),_,n,_,T(20),"[] ",B()),";",nl,w(12),N(7),P(),";",nl,w(8)),_,ct,P(V(5,$(T(9),_,I("e")))),_,B(),nl,w(4)))),nl))));}});