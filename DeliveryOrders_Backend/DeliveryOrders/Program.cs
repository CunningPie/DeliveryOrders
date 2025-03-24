using Backend.Database;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "localhost",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173",
                "https://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
        });

    options.AddPolicy(name: "docker",
        policy =>
        {
            policy.WithOrigins("http://frontend:5173",
                "https://frontend:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

builder.Services.AddControllers();
builder.Services.AddOpenApi("v1");
builder.Services.AddDbContext<AppDbContext>(
    options => options.UseNpgsql(builder.Configuration.GetConnectionString("Database"))
);

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
var app = builder.Build();

if (app.Environment.IsDevelopment()) {
    app.UseCors("localhost");
}
else {
    app.UseCors("docker");
}
app.MapOpenApi();

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
