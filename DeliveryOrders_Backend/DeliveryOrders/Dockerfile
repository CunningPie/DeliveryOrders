FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src

COPY ["DeliveryOrders_Backend/DeliveryOrders/DeliveryOrders_Backend.csproj", "DeliveryOrders_Backend/"]
RUN dotnet restore "./DeliveryOrders_Backend/DeliveryOrders_Backend.csproj"

COPY . .
RUN dotnet build "DeliveryOrders_Backend/DeliveryOrders_Backend.csproj" -c Release -o /app/build
RUN dotnet publish "DeliveryOrders_Backend/DeliveryOrders_Backend.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 9090
EXPOSE 9091

ENTRYPOINT ["dotnet", "DeliveryOrders_Backend.dll"]