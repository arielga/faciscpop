class PopController < ApplicationController

	FORMATOS_SUPORTADOS={
   	:pdf => 'application/pdf'
   }


	def index
	end

	def show
		respond_to do |format|
	      format.html
	      format.pdf do
	        render pdf: "pop", 
	        			template: 'pop/pop.pdf.erb'
	      end
	   end				
	end
end
